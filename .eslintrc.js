module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "react/jsx-props-no-spreading": [0],
  },
  "overrides": [
    {
      "files": ["*.jsx", "*.tsx"],
      "rules": {
        "no-unused-vars": [0]
      }
    }
  ],
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
