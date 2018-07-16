module.exports = {
    transformIgnorePatterns: [
        "node_modules/(?!(lodash-es)/)"
    ],
    moduleNameMapper: {
        "\\.(scss|png)$": "<rootDir>/testTools/assetsTransformer.js"
    },
};