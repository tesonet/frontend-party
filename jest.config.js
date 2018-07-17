module.exports = {
    setupFiles: [
        "./testTools/enzymeTestSetup.js",
    ],
    moduleNameMapper: {
        "\\.(scss|png)$": "<rootDir>/testTools/assetsTransformer.js"
    },
};