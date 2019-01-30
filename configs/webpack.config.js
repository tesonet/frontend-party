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
        test: /\.(scss|sass|css)?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
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
              sourceMap: true
            },
          }
        ]
      },
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
