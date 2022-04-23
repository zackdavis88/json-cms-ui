const { API_FQDN } = require('./config/app');
const withTM = require('next-transpile-modules')(['@mui/material']);
module.exports = withTM({
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_FQDN}/:path*`,
      },
    ];
  },
});
