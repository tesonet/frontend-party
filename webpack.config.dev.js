const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');


const src = './src';


module.exports = merge.smart(baseConfig, {
  entry: `${src}/index.js`,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: process.env.API_PROXY_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify('public'),
    }),
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
});
