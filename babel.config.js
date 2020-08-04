module.exports = {
  presets: [['@babel/env', { modules: false }], '@babel/preset-react', '@babel/typescript'],
  env: {
    test: {
      presets: [['@babel/preset-env']],
    },
  },
  plugins: ['@babel/plugin-transform-runtime'],
};
