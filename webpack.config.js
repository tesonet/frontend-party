const merge = require('webpack-merge');
const devConfig = require('./webpack/webpack.dev.js');
const prodConfig = require('./webpack/webpack.prod.js');
const commonConfig = require('./webpack/webpack.common.js');

const config = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return merge(commonConfig, devConfig());
    case 'production':
      return merge(commonConfig, prodConfig());
    default:
      throw new Error(`Incorrect NODE_ENV variable: ${process.env.NODE_ENV}`);
  }
};

module.exports = config();
