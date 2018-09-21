const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/app.js"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
