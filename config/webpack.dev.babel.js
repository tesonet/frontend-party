const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = require('./webpack.base.babel')({
  mode: 'development',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/index.js'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html',
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false,
    }),
  ],
  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },
});
