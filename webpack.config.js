const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './'), // where dev server will look for static files, not compiled
    publicPath: '/', //relative path to output path where  devserver will look for compiled files
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'), // base path where to send compiled assets
    publicPath: '/' // base path where referenced files will be look for
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src') // shortcut to reference src folder from anywhere
    }
  },
  module: {
    rules: [
      { // config for es6 jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { // config for images
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            }
          }
        ],
      },
      { // config for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "TesoApp"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["js/*.*", "fonts/*.*", "images/*.*"]
    }),
  ]
};