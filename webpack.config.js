const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'development';

const extractFonts = new ExtractTextPlugin('fonts.css');
const extractStyles = new ExtractTextPlugin('styles.css');

const config = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    'locale-compare-polyfill',
    './src/Client.jsx',
  ],
  devtool: IS_DEV ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(IS_DEV),
    }),
    extractFonts,
    extractStyles,
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: extractStyles.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              localIdentName: '[local]_[hash:base64:5]',
              modules: true,
              importLoaders: true,
              sourceMap: IS_DEV,
            },
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: IS_DEV },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV,
            },
          }],
        }),
      },
      {
        test: /font-awesome\.css$/,
        loader: extractFonts.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
}

module.exports = config;
