const path = require('path');
const webpack = require('webpack');

module.exports = (env) => ({
  entry: './src/index.tsx',
  stats: 'errors-only',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: './configs/tslint.json'
        }
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: 'awesome-typescript-loader',
        options: {
          'babelCore': '@babel/core',
          'babelOptions': {
            'babelrc': false,
            'presets': [
              [
                '@babel/preset-env',
                {
                  'targets': 'last 2 versions, ie 11',
                  'modules': false
                }
              ]
            ]
          },
          'configFileName': './configs/tsconfig.json',
          'useBabel': true
        }
      },
      {
        test: /\.(scss|sass)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: 'tio_[hash:base64:4]'
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './configs'
              },
              sourceMap: true
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: `
                @import './src/styles/helpers/_mixins.scss';
                @import './src/styles/helpers/_variables.scss';
              `
            },
          }
        ]
      },
      {
        test: /\.(css)?$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './configs'
              }
            },
          },
          {
            loader: 'sass-loader',
            options: {
              data: `
                @import './node_modules/bootstrap/scss/bootstrap.scss';
                @import './node_modules/reset-css/sass/_reset.scss';
                @import './src/styles/styles.scss';
              `
            },
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash].[ext]',
            },
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname + '/../', 'dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
