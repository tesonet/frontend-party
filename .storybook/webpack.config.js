const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true,
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
    resolve: {
      alias: {
        '@components': path.join(__dirname, '../src/components/'),
        '@assets': path.join(__dirname, '../src/assets/'),
      },
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
