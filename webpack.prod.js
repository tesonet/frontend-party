const webpack = require("webpack");
const path = require("path");
const BUILD_DIR = path.resolve(__dirname, "./dist");
const APP_DIR = path.resolve(__dirname, "./src");

// Merge webpack configs
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

// Minify JS
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// Plugin creates a CSS file per JS file which contains CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Minify CSS
const cssMinify = require("optimize-css-assets-webpack-plugin");

// Create App Manifest. Disabled for faster build
// const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[hash:5].js",
    path: BUILD_DIR
  },
  // optimization: {
  //   minimize: true
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" // Babel (transpile JS) loader
        }
      },
      {
        test: /\.(png|jpe?g|svg|webp)$/i,
        use: [
          {
            loader: "file-loader", // resolves import/require() on a file into a url and emits the file into the output directory.
            options: {
              name: "assets/images/[name].[hash:5].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader // Plugin creates a CSS file per JS file which contains CSS
          },
          {
            loader: "css-loader", //The css-loader interprets @import and url() like import/require() and will resolve them.
            options: {
              modules: {
                localIdentName: "_[hash:5]"
              }
            }
          },
          {
            loader: "postcss-loader", // CSS prefixers
            options: {
              sourceMap: true,
              config: {
                path: "postcss.config.js"
              }
            }
          },
          {
            loader: "sass-loader" // Compile SCSS to CSS
          },
          {
            loader: "sass-resources-loader", // This loader will @import your SASS resources into every required SASS module.
            options: {
              resources: [
                path.resolve(__dirname, APP_DIR + "/assets/sass/vars.scss")
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // IE 11 Promise polyfill
    new webpack.ProvidePlugin({
      Promise: "es6-promise-promise"
    }),
    new UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.[hash:5].css"
    }),
    new cssMinify()
    // new AppManifestWebpackPlugin({
    //   logo: "./src/assets/images/logo.png",
    //   output: "/assets/manifest/",
    //   config: {
    //     appName: "Testio",
    //     background: "#fff",
    //     theme_color: "#9fd533",
    //     version: "1.0",
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       favicons: true,
    //       firefox: true,
    //       windows: true
    //     }
    //   }
    // }),
  ]
});
