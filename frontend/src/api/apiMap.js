module.exports = {
    API: '/api/',
    LOGIN: '/api/tokens',
    ME: '/api/users/me?expand=permissions',
    HOSTS: '/api/reports/hosts?expand=owner,access_list,certificate',
    REDIRECTION: '/api/nginx/redirection-hosts?expand=owner,certificate',
    CERTIFICATES: '/api/nginx/certificates?expand=owner',
    STREAM: '/api/nginx/streams?expand=owner',
    DEAD: '/api/nginx/dead-hosts?expand=owner,certificate',
    ACCESS: '/api/nginx/access-lists?expand=owner,items,clients',
    USERS: '/api/users?expand=permissions',
    AUDIT: '/api/audit-log?expand=user',
    SETTING: '/api/settings'
}