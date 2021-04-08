const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 3,
              sourceMap: true,
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          }
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "svg-url-loader"],
      },
    ]
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  }
};