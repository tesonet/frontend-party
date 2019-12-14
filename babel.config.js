module.exports = {
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: './src',
        alias: {
          '~': './src',
          '<assets>': './assets',
        },
      },
    ],
  ],
  presets: ['@babel/preset-react', '@babel/preset-env'],
};
