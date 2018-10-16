const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const dotenv = require('dotenv');
const path = require('path');

module.exports = () => {
  const env = dotenv.config({
    path: path.resolve(__dirname, '../env/prod.env'),
  }).parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    stats: {
      builtAt: false,
      colors: false,
      hash: true,
      timings: false,
      assets: false,
      chunks: false,
      chunkModules: false,
      modules: false,
      children: false,
      entrypoints: false,
      maxModules: 0,
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            mangle: {
              keep_fnames: true,
            },
          },
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name].[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.s[c|a]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                silent: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
