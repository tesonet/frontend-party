const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../build/'),
    filename: '[name].bundle.[chunkhash].js',
  },
  entry: [
    './src/index.js',
  ],
  plugins: [
    // Minify JS
    new UglifyJsPlugin(),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      sourceMaps: false,
    }),
  ],
});
