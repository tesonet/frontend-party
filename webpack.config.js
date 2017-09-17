const _ = require('lodash');
const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { default: createStyledComponentsTransformer } = require('typescript-plugin-styled-components');

// enable development for only npm script dev
const development = process.env.npm_lifecycle_event === 'dev';
const environment = development ? 'development' : 'production';

const srcpath = path.dirname(pkg.main);
const plugins = {
  define: new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(environment),
    },
  }),
  extractsass: new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: development,
  }),
  codesplit: new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: '[hash].vendor.js',
    minChunks(module) {
      const context = module.context;
      return context && context.indexOf('node_modules') >= 0;
    },
  }),
  template: new HtmlWebpackPlugin({
    template: `${srcpath}/index.html`,
    inject: false,
  }),
  uglify: new webpack.optimize.UglifyJsPlugin({
    uglifyOptions: {
      compress: true,
      ie8: false,
      ecma: 8,
      output: {
        comments: false,
        beautify: false,
      },
      warnings: false,
    },
  }),
};

module.exports = {
  entry: `./${pkg.main}`,
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 9000,
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: (
    development ? [
      plugins.extractsass,
      plugins.codesplit,
      plugins.define,
      plugins.template,
    ] : [
      plugins.extractsass,
      plugins.codesplit,
      plugins.define,
      plugins.template,
      plugins.uglify,
    ]
  ),
  module: {
    rules: [{
      test: /\.(jpeg|jpg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
      use: {
        loader: 'file-loader',
      },
    }, {
      test: /\.scss$/,
      use: plugins.extractsass.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: !development,
            sourceMap: development,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: development,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: development,
          },
        }],
      }),
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        getCustomTransformers: () => ({
          before: [
            createStyledComponentsTransformer(),
          ],
        }),
      },
    }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      joi: 'joi-browser',
    },
  },
};
