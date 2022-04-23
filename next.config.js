const withTM = require('next-transpile-modules')(['@mui/material']);
module.exports = withTM({
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3333/:path*',
      },
    ];
  },
});
