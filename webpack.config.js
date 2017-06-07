const path = require('path');
const webpack = require('webpack');

const IS_DEV = process.env.NODE_ENV === 'development';

const config = {
  context: __dirname,
  entry: ['./src/client.jsx'],
  devtool: IS_DEV ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        use: [{
          loader: 'style-loader',
          options: { sourceMap: IS_DEV }
        }, {
          loader: 'css-loader',
          options: {
            localIdentName: '[local]_[hash:base64:5]',
            modules: true,
            sourceMap: IS_DEV
          }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: IS_DEV }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: IS_DEV
          }
        }]
      }
    ]
  }
};

if (process.env.NODE_ENV === 'development') {
  config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
}

module.exports = config;