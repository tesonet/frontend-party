const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@containers': path.join(__dirname, './src/containers/'),
      '@components': path.join(__dirname, './src/components/'),
      '@assets': path.join(__dirname, './src/assets/'),
      '@redux': path.join(__dirname, './src/redux/'),
      '@layouts': path.join(__dirname, './src/layouts'),
      '@theme': path.join(__dirname, './src/theme'),
      '@utils': path.join(__dirname, './src/utils'),
      '@pages': path.join(__dirname, './src/pages'),
      '@routes': path.join(__dirname, './src/routes'),
      '@typings': path.join(__dirname, './src/typings'),
      '@hooks': path.join(__dirname, './src/hooks'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(envKeys),
  ],
};
