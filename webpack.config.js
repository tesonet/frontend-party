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
    historyApiFallback: true,
    contentBase: path.join(__dirname, './'),
    publicPath: '/',
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [["@babel/plugin-transform-runtime",
              {
                "regenerator": true
              }
            ]]
          }
        }
      },
      {
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
      {
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
      title: "Testio"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["js/*.*", "fonts/*.*", "images/*.*"]
    }),
  ]
};