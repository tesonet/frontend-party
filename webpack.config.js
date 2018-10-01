// Most of this configuration was transplanted from an older project of mine.

const path = require('path');

const glob = require('glob');
const webpack = require('webpack');

const HTMLWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin');

const inProjectDir = (...paths) => path.join(__dirname, ...paths);
const inSourceDir = (...paths) => inProjectDir('src', ...paths);

const developmentMode = path.basename(require.main.filename) === 'webpack-dev-server.js';

const htmlWebpackPluginOptions = {
  template: inSourceDir('index.html')
};

if (!developmentMode) {
  htmlWebpackPluginOptions.inlineSource = /\.(css|js)$/;
  htmlWebpackPluginOptions.minify = {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    decodeEntities: true,
    minifyCSS: {
      level: {
        1: {
          specialComments: 0
        }
      }
    },
    minifyJS: true,
    minifyURLs: true,
    preventAttributesEscaping: true,
    quoteCharacter: '"',
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true
  };
}

let plugins = [
  new HTMLWebpackPlugin(htmlWebpackPluginOptions)
];

if (developmentMode) {
  plugins = [
    ...plugins,
    new webpack.HotModuleReplacementPlugin()
  ];
} else {
  plugins = [
    new MiniCSSExtractPlugin(),
    new PurgecssWebpackPlugin({
      paths: glob.sync(inSourceDir('**', '*.{html,jsx}'))
    }),
    ...plugins,
    new HTMLWebpackInlineSourcePlugin()
  ];
}

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true
  },
  devtool: developmentMode ? 'eval-source-map' : false,
  mode: developmentMode ? 'development' : 'production',
  module: {
    rules: [
      // JavaScript and React JSX.
      {
        test: /\.jsx?$/,
        exclude: inProjectDir('node_modules/'),
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env',
            '@babel/react'
          ]
        }
      },
      // SCSS.
      {
        test: /\.scss$/,
        use: [
          developmentMode ? 'style-loader' : MiniCSSExtractPlugin.loader,
          'css-loader',
          // According to the Bootstrap documentation, this is the minimal setup required to compile
          // Bootstrap.
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('precss'),
                require('autoprefixer')
              ]
            }
          },
          'sass-loader'
        ]
      },
      // Images.
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader'
      },
      // Fonts.
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins,
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.scss'
    ]
  }
};
