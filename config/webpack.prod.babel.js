const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.base.babel')({
  mode: 'production',
  entry: [
    path.join(process.cwd(), 'app/index.js'),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],

  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
});
