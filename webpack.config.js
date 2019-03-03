require("babel-polyfill");
const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

let env;
if (process.env.NODE_ENV === undefined) {
  env = "development";
} else {
  env = process.env.NODE_ENV.toLowerCase();
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: env === "production" ? "[name].[hash].css" : "[name].css",
    chunkFilename: env === "production" ? "[name].[hash].css" : "[id].css"
  }),
  new HtmlWebpackPlugin({
    title: "Server list app",
    meta: {
      viewport: "width=device-width, initial-scale=1.0"
    }
  })
];

if (env === "production") {
  plugins.push(new webpack.HashedModuleIdsPlugin());
}

if (env === "development") {
  plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  );
}

const getCSSLoaders = () => {
  const loaders = [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: env !== "production"
      }
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: env !== "production",
        includePaths: [path.join("src", "styles")]
      }
    }
  ];
  if (env !== "production") {
    loaders.unshift("css-hot-loader");
  }
  return loaders;
};

module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "src", "index.tsx")],
  output: {
    filename: env === "production" ? "[name]-[chunkhash].js" : "[name].js",
    path: `${__dirname}/dist`,
    globalObject: "this"
  },
  optimization:
    env === "production"
      ? {
          splitChunks: {
            chunks: "all"
          },
          runtimeChunk: true,
          minimizer: [
            new UglifyJsPlugin({
              sourceMap: true,
              cache: true,
              parallel: true,
              uglifyOptions: {
                compress: {
                  booleans: false,
                  collapse_vars: false,
                  comparisons: false,
                  hoist_funs: false,
                  hoist_props: false,
                  hoist_vars: false,
                  if_return: false,
                  inline: false,
                  join_vars: false,
                  keep_infinity: true,
                  loops: false,
                  negate_iife: false,
                  properties: false,
                  reduce_funcs: false,
                  reduce_vars: false,
                  sequences: false,
                  side_effects: false,
                  switches: false,
                  top_retain: false,
                  toplevel: false,
                  typeofs: false,
                  unused: true,
                  conditionals: true,
                  dead_code: true,
                  evaluate: true
                },
                mangle: true
              }
            }),
            new OptimizeCSSAssetsPlugin()
          ]
        }
      : {},
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, "src"),
        exclude: [/node_modules/, /__tests__/],
        use: ["babel-loader?cacheDirectory=true"]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: getCSSLoaders()
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff2?|ttf)$/i,
        use: "url-loader?limit=8192"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".scss", ".css"],
    modules: ["node_modules", "src"]
  },
  devtool: env === "production" ? "source-map" : "cheap-module-source-map",
  devServer:
    env === "production"
      ? {}
      : {
          overlay: {
            warnings: true,
            errors: true
          },
          stats: "errors-only",
          historyApiFallback: true
        },
  plugins: plugins
};
