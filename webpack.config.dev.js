const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const src = './src';


module.exports = {
  entry: `${src}/index.js`,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.resolve('build'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
    ],
  },
  resolve: {
    alias: {'~': path.resolve(`${__dirname}/src`)},
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
