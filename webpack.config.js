const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const src = './src';


module.exports = {
  entry: src + '/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html',
      inject: 'body',
    })
  ]
};
