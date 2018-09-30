const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index.js',
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    hotModuleReplacementPlugin,
  ],
});
