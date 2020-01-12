/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["./src/index.tsx"],
    vendor: ["react", "react-dom"]
  },
  output: {
    publicPath: "http://localhost:3000",
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    publicPath: "/",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};
