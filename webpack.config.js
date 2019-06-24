const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const RobotsTxtPlugin = require('robotstxt-webpack-plugin').default;
const CompressionPlugin = require('compression-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

process.env.DEV_MODE = process.env.DEV_MODE || 'development';

if (process.env.DEV_MODE === 'production') {
  require('dotenv').config({path: '.env.production'});
} else if (process.env.DEV_MODE === 'development') {
  require('dotenv').config({path: '.env.development'});
} else if (process.env.DEV_MODE === 'testProduction') {
  process.env.IS_DEVELOPMENT = true;
}

module.exports = () => {

  const isProduction = process.env['IS_DEVELOPMENT'] === 'false';
  const HTMLPlugin = new HtmlWebpackPlugin(
    {
      title: 'Testio App',
      template: './src/index.html',
      minify: true
    }
  );

  const HTMLPreloadPlugin = new PreloadWebpackPlugin({
    rel: 'preload',
    include: 'initial'
  });

  const CssOptimizer = new OptimizeCSSAssetsPlugin({
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ],
    },
  });

  const miniCssPlugin = new MiniCssExtractPlugin({
    filename: '[name][hash].css'
  });

  let envToJSONConverter = new webpack.DefinePlugin({
    IS_DEVELOPMENT: (process.env && process.env['IS_DEVELOPMENT']) || false,
  });

  let envPlugins = [miniCssPlugin, HTMLPlugin, HTMLPreloadPlugin, envToJSONConverter];

  if (isProduction) {

    const CleanPlugin = new CleanWebpackPlugin({path: './public'});
    const createRobotsTxt = new RobotsTxtPlugin();
    const gzipCompressionPlugin = new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      minRatio: 0.6
    });

    envPlugins.push(CleanPlugin);
    envPlugins.push(createRobotsTxt);
    //envPlugins.push(gzipCompressionPlugin);

  }

  return {
    entry: ['babel-polyfill', 'whatwg-fetch', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public/'),
      filename: '[name].[hash].js',
    },
    mode: isProduction || 'development',
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            {
              loader: 'resolve-url-loader',
              options: {
                root: path.join(__dirname, 'src')
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sourceMapContents: false
              }
            }
          ]
        },

        {
          test: /\.(svg|gif|png)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images'
            }

          }
        },

        {
          test: /\.(otf|woff2|ttf|eot|woff)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        }

      ]
    },
    plugins: envPlugins,
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      //https: true,
      host: '0.0.0.0',
      port: '8080',
      disableHostCheck: true,
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/'
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      minimizer: [
        CssOptimizer,
        new UglifyJsPlugin({
          sourceMap: false,
          parallel: true,
          extractComments: true,
          uglifyOptions: {
            compress: {
              inline: true
            }
          }
        })
      ]
    }
  };
};
