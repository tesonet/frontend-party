module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['jsx-a11y', 'prettier', 'cypress'],
  rules: {
    semi: 0,
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/jsx-props-no-spreading': 0,
    'prettier/prettier': [
      'error',
      {
        semi: false,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', 'stories/**', '**/*.stories.js'],
      },
    ],
  },
  env: {
    'cypress/globals': true,
  },
}
