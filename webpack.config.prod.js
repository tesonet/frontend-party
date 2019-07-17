const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWeppackPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const postcssSafeParser = require("postcss-safe-parser");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const base = require("./webpack.config.base");

module.exports = merge(base, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "static/js/main.[hash:8].js",
    chunkFilename: "static/js/[name].chunk.[hash:8].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        // css-loader
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        // copies image files to assets folder in destination folder - build
        test: /\.(svg|png|jpg|jpeg|gif|mp3|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]",
              outputPath: "static/assets"
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserWeppackPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        parallel: true,
        cache: true,
        sourceMap: true
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "public", "favicon.ico"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAtributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[hash:8].css"
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        parser: postcssSafeParser,
        map: true
      }
    }),
    new CleanWebpackPlugin()
  ]
});
