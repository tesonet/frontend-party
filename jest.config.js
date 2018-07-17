module.exports = {
    transformIgnorePatterns: [
        "<rootDir>/node_modules/(?!lodash-es)"
    ],
    setupFiles: [
        "./testTools/enzymeTestSetup.js",
    ],
    moduleNameMapper: {
        "\\.(scss|png)$": "<rootDir>/testTools/assetsTransformer.js"
    },
};