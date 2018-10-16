const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../app/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      Components: path.resolve(__dirname, '..', 'app', 'components'),
      Interfaces: path.resolve(__dirname, '..', 'app', 'interfaces'),
      Pages: path.resolve(__dirname, '..', 'app', 'pages'),
      Services: path.resolve(__dirname, '..', 'app', 'services'),
      Actions: path.resolve(__dirname, '..', 'app', 'actions'),
      Reducers: path.resolve(__dirname, '..', 'app', 'reducers'),
      Middlewares: path.resolve(__dirname, '..', 'app', 'middlewares'),
    },
  },
  plugins: [new CleanWebpackPlugin('dist', {}), new WebpackMd5Hash()],
};
