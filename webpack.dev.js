const path = require("path");
const APP_DIR = path.resolve(__dirname, "./src");

// Merge webpack configs
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

// Plugin creates a CSS file per JS file which contains CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",

  // Server with LiveReload
  devServer: {
    contentBase: "./src", //Serve content from
    historyApiFallback: true // For using HTML 5 History API (react)
  },

  plugins: [new MiniCssExtractPlugin()], // Plugin creates a CSS file per JS file which contains CSS
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: {
          loader: "ejs-loader" // LoDash Template loader
        }
      },

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
              name: "[name].[hash:5].[ext]"
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
                localIdentName: "[local]"
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
  }
});
