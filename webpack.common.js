const path = require("path");
const APP_DIR = path.resolve(__dirname, "./src");

// Clean Build Folder
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Build App html file
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Modernizr
const modernizr = require("webpack-modernizr-loader");

module.exports = {
  entry: APP_DIR + "/index.js",

  output: {
    publicPath: "/"
  },

  plugins: [
    new CleanWebpackPlugin(), // Cleans Build Folder

    // Build App html file
    new HtmlWebpackPlugin({
      title: "Testio App", // Meta title var  for ejs template
      template: APP_DIR + "/index.ejs" // App html template path
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".scss"], // Generate all the possible paths to the module

    // Create alias for easier import/require modules
    alias: {
      assets: path.resolve(__dirname, APP_DIR + "/assets/"), // Assets folder
      utils: path.resolve(__dirname, APP_DIR + "/utils"), // Here we have: Configs, validations, auths, userContext
      common: path.resolve(__dirname, APP_DIR + "/components/common"), // Here we have common components, like buttons, form controls, form erors
      modernizr$: path.resolve(__dirname, ".modernizrrc")
    }
  },
  module: {
    rules: [
      {
        loader: "webpack-modernizr-loader",
        test: /\.modernizrrc$/
      }
    ]
  }
};
