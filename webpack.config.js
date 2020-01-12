const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { WebpackPluginServe: Serve } = require("webpack-plugin-serve");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    publicPath: "/",
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json"
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          experimentalWatchApi: true
        },
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new Serve({
      client: { silent: true },
      liveReload: true,
      historyFallback: true,
      port: 3000,
      open: false,
      static: path.resolve(__dirname, "public")
    })
  ],
  watch: true
};
