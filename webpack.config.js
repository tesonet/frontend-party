const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: './index.html',
      inject: 'body'
    })
  ]
};
