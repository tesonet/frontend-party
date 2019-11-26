const HtmlWebpackPlugin = require("html-webpack-plugin");
require("@babel/polyfill");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    historyApiFallback: true
  }
};
