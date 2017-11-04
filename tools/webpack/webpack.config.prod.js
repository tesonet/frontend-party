import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import OfflinePlugin from 'offline-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'), __DEV__: false,
};

const plugins = [
  new webpack.DefinePlugin(GLOBALS),
  new HtmlWebpackPlugin({
    inject: true,
    template: 'src/index.html',
    favicon: 'src/images/favicon.ico',
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
  }),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: false,
  }),
  new webpack.ProvidePlugin({
    // make fetch available
    fetch: 'exports-loader?self.fetch!whatwg-fetch',
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
  }),
  new OfflinePlugin({
    relativePaths: false,
    publicPath: '/',
    caches: {
      main: [':rest:'],
      additional: ['*.chunk.js'],
    },
    safeToUseOptionalCaches: true,
    AppCache: false,
  }),
];

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  entry: [
    path.join(process.cwd(), 'src/app.js'), // Start with js/app.js
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'build'),
    chunkFilename: '[name].chunk.js',
  },
  devtool: 'cheap-module-eval-source-map',
  performance: {
    hints: false,
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-0'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins,
};
