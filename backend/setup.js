const fs                  = require('fs');
const NodeRSA             = require('node-rsa');
const config              = require('config');
const logger              = require('./logger').setup;
const userModel           = require('./models/user');
const userPermissionModel = require('./models/user_permission');
const authModel           = require('./models/auth');
const settingModel        = require('./models/setting');
const debug_mode          = process.env.NODE_ENV !== 'production' || !!process.env.DEBUG;

/**
 * Creates a new JWT RSA Keypair if not alread set on the config
 *
 * @returns {Promise}
 */
const setupJwt = () => {
	return new Promise((resolve, reject) => {
		// Now go and check if the jwt gpg keys have been created and if not, create them
		if (!config.has('jwt') || !config.has('jwt.key') || !config.has('jwt.pub')) {
			logger.info('Creating a new JWT key pair...');

			// jwt keys are not configured properly
			const filename  = config.util.getEnv('NODE_CONFIG_DIR') + '/' + (config.util.getEnv('NODE_ENV') || 'default') + '.json';
			let config_data = {};

			try {
				config_data = require(filename);
			} catch (err) {
				// do nothing
				if (debug_mode) {
					logger.debug(filename + ' config file could not be required');
				}
			}

			// Now create the keys and save them in the config.
			let key = new NodeRSA({ b: 2048 });
			key.generateKeyPair();

			config_data.jwt = {
				key: key.exportKey('private').toString(),
				pub: key.exportKey('public').toString(),
			};

			// Write config
			fs.writeFile(filename, JSON.stringify(config_data, null, 2), (err) => {
				if (err) {
					logger.error('Could not write JWT key pair to config file: ' + filename);
					reject(err);
				} else {
					logger.info('Wrote JWT key pair to config file: ' + filename);

					logger.warn('Restarting interface to apply new configuration');
					process.exit(0);
				}
			});
		} else {
			// JWT key pair exists
			if (debug_mode) {
				logger.debug('JWT Keypair already exists');
			}

			resolve();
		}
	});
};

/**
 * Creates a default admin users if one doesn't already exist in the database
 *
 * @returns {Promise}
 */
const setupDefaultUser = () => {
	return userModel
		.query()
		.select(userModel.raw('COUNT(`id`) as `count`'))
		.where('is_deleted', 0)
		.first()
		.then((row) => {
			if (!row.count) {
				// Create a new user and set password
				logger.info('Creating a new user: admin@example.com with password: changeme');

				let data = {
					is_deleted: 0,
					email:      'admin@example.com',
					name:       'Administrator',
					nickname:   'Admin',
					avatar:     '',
					roles:      ['admin'],
				};

				return userModel
					.query()
					.insertAndFetch(data)
					.then((user) => {
						return authModel
							.query()
							.insert({
								user_id: user.id,
								type:    'password',
								secret:  'changeme',
								meta:    {},
							})
							.then(() => {
								return userPermissionModel.query().insert({
									user_id:           user.id,
									visibility:        'all',
									proxy_hosts:       'manage',
									redirection_hosts: 'manage',
									dead_hosts:        'manage',
									streams:           'manage',
									access_lists:      'manage',
									certificates:      'manage',
								});
							});
					})
					.then(() => {
						logger.info('Initial admin setup completed');
					});
			} else if (debug_mode) {
				logger.debug('Admin user setup not required');
			}
		});
};

/**
 * Creates default settings if they don't already exist in the database
 *
 * @returns {Promise}
 */
const setupDefaultSettings = () => {
	return settingModel
		.query()
		.select(settingModel.raw('COUNT(`id`) as `count`'))
		.where({id: 'default-site'})
		.first()
		.then((row) => {
			if (!row.count) {
				settingModel
					.query()
					.insert({
						id:          'default-site',
						name:        'Default Site',
						description: 'What to show when Nginx is hit with an unknown Host',
						value:       'congratulations',
						meta:        {},
					})
					.then(() => {
						logger.info('Default settings added');
					});
			}
			if (debug_mode) {
				logger.debug('Default setting setup not required');
			}
		});
};

module.exports = function () {
	return setupJwt()
		.then(setupDefaultUser)
		.then(setupDefaultSettings);
};
