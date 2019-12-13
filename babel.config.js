module.exports = {
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    [
      'module-resolver',
      {
        alias: {
          '~': './src',
          '<assets>': './assets',
        },
      },
    ],
  ],
  presets: ['@babel/preset-react', '@babel/preset-env'],
};
