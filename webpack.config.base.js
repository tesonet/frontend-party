const path = require('path');
const webpack = require('webpack');


module.exports = {
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, loader: 'url-loader?limit=100000'},
    ],
  },
  output: {
    path: path.resolve('build'),
    filename: 'index_bundle.js',
  },
  resolve: {
    alias: {'~': path.resolve(`${__dirname}/src`)},
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],
};
