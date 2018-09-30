const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  title: 'Testio',
  template: './src/index.html',
  filename: './index.html',
});

const cleanWebpackPlugun = new CleanWebpackPlugin([path.join(__dirname, '../build')]);

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              cacheDirectory: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: false,
              minimize: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          /* inline if smaller than 10 KB, otherwise load as a file */
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: '[hash]-[name].[ext]',
            outputPath: './images/',
          },
        }],
      },
      {
        test: /\.(eot|ttf|woff2?|otf)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    cleanWebpackPlugun,
    htmlWebpackPlugin,
  ],
};
