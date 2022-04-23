const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const { PORT } = require('./config/app');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./config/ssl/key.pem'),
  cert: fs.readFileSync('./config/ssl/cert.pem'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(PORT, '0.0.0.0', () => {
    console.log(`JSON CMS UI is listening on port ${PORT}`);
  });
});
