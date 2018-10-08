require('dotenv').config();
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const api = require('./api');
const cors = require('./api/helpers/cors');

app
  .prepare()
  .then(() => {
    const server = express();

    if (!dev) {
      cors(server);
    }

    server.use(bodyParser.json());

    server.get('*', (req, res) => handle(req, res));

    server.get('/blog/:slug', (req, res) => {
      const nextJsPage = '/blogPost';
      const queryParams = { slug: req.params.slug };
      app.render(req, res, nextJsPage, queryParams);
    });

    api({ server, app });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready http://localhost:3000 <');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
