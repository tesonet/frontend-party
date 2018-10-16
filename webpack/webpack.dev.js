const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');
const path = require('path');

module.exports = () => {
  const env = dotenv.config({ path: path.resolve(__dirname, '../env/dev.env') })
    .parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    module: {
      rules: [
        {
          test: /\.s[c|a]ss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                import: true,
                context: '.',
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            'sass-loader',
          ],
        },
        { test: /\.tsx?$/, loader: 'ts-loader' },
      ],
    },
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name].js',
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './app/index.html',
        filename: 'index.html',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
