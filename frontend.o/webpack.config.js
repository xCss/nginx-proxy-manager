const path                 = require('path');
const webpack              = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Visualizer           = require('webpack-visualizer-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const PACKAGE              = require('./package.json');
const resolve = function(dir){
	return path.resolve(__dirname, dir)
}
module.exports = {
	entry:     {
		main:  './js/index.js',
		login: './js/login.js'
	},
	output:    {
		path:          resolve('dist'),
		filename:      'js/[name].bundle.js',
		chunkFilename: 'js/[name].bundle.[id].js',
		publicPath:    '/'
	},
	resolve:   {
		modules: ['node_modules'],
		alias: {
			'tabler-core':      resolve('tabler-ui/assets/js/core'),
			'jquery': 			resolve('tabler-ui/assets/js/vendors/jquery-3.2.1.min'),
			'bootstrap':        resolve('tabler-ui/assets/js/vendors/bootstrap.bundle.min'),
			'sparkline':        resolve('tabler-ui/assets/js/vendors/jquery.sparkline.min'),
			'selectize':        resolve('tabler-ui/assets/js/vendors/selectize.min'),
			'tablesorter':      resolve('tabler-ui/assets/js/vendors/jquery.tablesorter.min'),
			'vector-map':       resolve('tabler-ui/assets/js/vendors/jquery-jvectormap-2.0.3.min'),
			'vector-map-de':    resolve('tabler-ui/assets/js/vendors/jquery-jvectormap-de-merc'),
			'vector-map-world': resolve('tabler-ui/assets/js/vendors/jquery-jvectormap-world-mill'),
			'circle-progress':  resolve('tabler-ui/assets/js/vendors/circle-progress.min'),
			'c3':               resolve('tabler-ui/assets/js/vendors/chart.bundle.min')
		}
	},
	module:    {
		rules: [
			// Shims for tabler-ui
			{
				test:   /assets\/js\/core/,
				loader: 'imports-loader?bootstrap'
			},
			{
				test:   /jquery-jvectormap-de-merc/,
				loader: 'imports-loader?vector-map'
			},
			{
				test:   /jquery-jvectormap-world-mill/,
				loader: 'imports-loader?vector-map'
			},

			// other:
			{
				type:    'javascript/auto', // <= Set the module.type explicitly
				test:    /\bmessages\.json$/,
				loader:  'messageformat-loader',
				options: {
					biDiSupport:            false,
					disablePluralKeyChecks: false,
					formatters:             null,
					intlSupport:            false,
					// locale:                 ['en'],
					locale:                 ['zh'],
					strictNumberSign:       false
				}
			},
			{
				test:    /\.js$/,
				exclude: /node_modules/,
				use:     {
					loader: 'babel-loader'
				}
			},
			{
				test:   /\.ejs$/,
				loader: 'ejs-loader'
			},
			{
				test: /\.scss$/,
				use:  [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /.*tabler.*\.(jpe?g|gif|png|svg|eot|woff|ttf)$/,
				use:  [
					{
						loader:  'file-loader',
						options: {
							outputPath: 'assets/tabler-ui/'
						}
					}
				]
			}
		]
	},
	plugins:   [
		new webpack.ProvidePlugin({
			$:      'jquery',
			jQuery: 'jquery',
			_:      'underscore'
		}),
		new HtmlWebpackPlugin({
			template:           '!!ejs-webpack-loader!html/index.ejs',
			filename:           'index.html',
			inject:             false,
			templateParameters: {
				version: PACKAGE.version
			}
		}),
		new HtmlWebpackPlugin({
			template:           '!!ejs-webpack-loader!html/login.ejs',
			filename:           'login.html',
			inject:             false,
			templateParameters: {
				version: PACKAGE.version
			}
		}),
		new MiniCssExtractPlugin({
			filename:      'css/[name].css',
			chunkFilename: 'css/[id].css'
		}),
		new Visualizer({
			filename: '../webpack_stats.html'
		}),
		new CopyWebpackPlugin([{
			from:    'app-images',
			to:      'images',
			toType:  'dir',
			// context: './app/frontend'
		}])
	]
};
