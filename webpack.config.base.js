module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        include: /src/,
        loader: "eslint-loader",
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
};
