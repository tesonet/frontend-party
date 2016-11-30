import path from 'path';
import autoprefixer from 'autoprefixer';

module.exports = {
  plugins: [],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'], include: path.resolve(__dirname, '../src/') },
    ],
  },
  postcss: () => [autoprefixer],
};
