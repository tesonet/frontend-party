/* eslint no-console:0 */
require('babel-register');

const IS_DEV = process.env.NODE_ENV === 'development';

const express = require('express');
const bodyParser = require('body-parser');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpack = require('webpack');
const config = require('./webpack.config');

const hook = require('css-modules-require-hook');

const apiProxy = require('./apiProxy');

hook({
  rootDir: './',
  generateScopedName: '[local]_[hash:base64:5]',
  extensions: ['.scss', '.css'],
});


global.window = {};
global.IS_DEV = IS_DEV;

const App = require('./src/App').default;

const StaticRouter = ReactRouter.StaticRouter;
const port = 8100;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);

const server = express();
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  server.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    }),
  );
  server.use(webpackHotMiddleware(compiler));
}

server.use('/public', express.static('./public'));
server.use('/static', express.static('./static'));

server.use(bodyParser.json());
server.all('/api/*', apiProxy);

server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App)),
  );
  res.end(template({ body }));
});

console.log(`listening on ${port}`);
server.listen(port);
