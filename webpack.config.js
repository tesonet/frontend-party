const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.tsx'],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
    alias: {
      '@modules': path.join(__dirname, './src/modules/'),
      '@components': path.join(__dirname, './src/components/'),
      '@assets': path.join(__dirname, './src/assets/'),
      '@redux': path.join(__dirname, './src/redux/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.(jpe?g|png)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
