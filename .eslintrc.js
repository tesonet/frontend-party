module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb"
    ],
    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'state',
            ]
        }],
        'import/no-unresolved': 'off',
        'react/jsx-props-no-spreading': 'off'
    }
};