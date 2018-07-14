const path = require('path');

module.exports = {
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "jquery": true,
        "jest": true
    },
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": path.resolve(__dirname,"webpack.config.babel.js")
            }
        }
    },
    "globals": {}
};
