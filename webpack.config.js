const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.tsx'],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g)$/i,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  serve: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: 'static', to: 'static' }
    ])
  ]
}