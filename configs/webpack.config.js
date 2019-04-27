const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.join(__dirname, '/../dist'),
    publicPath: "/dist/",
    filename: "./js/app.js"
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    hot: true,
    port: 9000
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: './configs/tslint.json'
        }
      },
      {
        test: /\.*(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: './configs/tsconfig.json',
              useBabel: true,
              babelCore: '@babel/core',
              babelOptions: {
                babelrc: false,
                presets: [
                  ["@babel/preset-env", { "targets": "last 2 versions, ie 11", "modules": false }]
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './configs/postcss.config.js'
              }
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
            name: '../dist/fonts/[name].[ext]'
        }
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '../dist/images/[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '../dist/svg/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css'
    })
  ]
};
