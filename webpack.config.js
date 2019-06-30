const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, 'app')
  },
  plugins: [
    new CopyPlugin([
      {
        from: './client/build',
        to: './client'
      },
      {
        from: './server/*.js',
        to: './'
      },
      {
        from: './server/package.json',
        to: './server'
      },
      {
        from: './server/.babelrc',
        to: './server'
      },
      {
        from: './server/app-runner.json',
        to: './package.json'
      }
    ])
  ]
};