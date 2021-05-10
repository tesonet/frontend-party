const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const fs = require('fs')
const webpack = require('webpack')
const dotenv = require('dotenv')
const appDirectory = fs.realpathSync(process.cwd())
const ESLintPlugin = require('eslint-webpack-plugin')
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  entry: resolveAppPath('src'),
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsConfigPathsPlugin()],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: '/(node_modules)/',
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolveAppPath('public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: './src/yourfile.css',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new ESLintPlugin({}),
  ],
}
