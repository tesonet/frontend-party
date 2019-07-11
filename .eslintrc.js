module.exports = {
    extends: [
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    plugins: ['react', 'prettier', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {
        'no-unused-vars': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/array-type': ['error', 'array'],
        'arrow-body-style': ['error', 'as-needed'],
        'prettier/prettier': ['error', { parser: 'typescript' }],
        'import/prefer-default-export': 'off',
    },
};
