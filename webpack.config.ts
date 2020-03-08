import {Configuration, DefinePlugin, LoaderOptionsPlugin} from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const ENV = process.env.npm_lifecycle_event;
const isTest = ENV.includes('test');
const isProd = !isTest && ENV.includes('build');

const config: Configuration = {
  devtool: !isProd ? 'source-map' : false,
  entry: './src/index.tsx',
  mode: isProd ? 'production' : 'development',
  output: isTest ? {} : {
    path: path.join(__dirname, 'dist'),
    publicPath: isProd ? './' : '/',
    filename: isProd ? 'js/[name].js' : '[name].js',
    pathinfo: false
  },
  resolve: {
    unsafeCache: !isTest,
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ],
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss', '.html'],
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true
        },
        include: path.join(__dirname, 'src'),
        exclude: [/\.spec\.ts[x]?$/]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|mp3|mp4)$/,
        include: path.join(__dirname, 'src'),
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]?'
          }
        }]
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        exclude: [
          path.join(__dirname, 'src', 'views'),
          /node_modules/
        ],
        use: isTest ? 'null-loader' : [
          {loader: MiniCssExtractPlugin.loader},
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              importLoaders: 2
            }
          },
          {loader: 'sass-loader', options: {sourceMap: !isProd}}
        ]
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'src', 'styles'),
        use: isTest ? 'null-loader' : [
          {loader: MiniCssExtractPlugin.loader},
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              },
              importLoaders: 2
            }
          },
          {loader: 'sass-loader', options: {sourceMap: !isProd}}
        ]
      },
      {
        test: /\.html$/,
        include: path.join(__dirname, 'src', 'index.html'),
        use: {
          loader: 'raw-loader'
        }
      }
    ]
  },
  stats: 'none',
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development')
    }),
    new LoaderOptionsPlugin({
      debug: !isProd || !isTest
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    !isTest && new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'dependency',
      filename: 'index.html'
    }),
    isProd && new LoaderOptionsPlugin({minimize: true})
  ].filter(Boolean),
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8080
  }
};

export default config;
