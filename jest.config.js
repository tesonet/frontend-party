module.exports = {
    verbose: true,
    testPathIgnorePatterns: ["/node_modules/", "/fixtures/.*", "/tests/mocks/", "/tests/enzyme-setup.js"],
    modulePaths: [
        '<rootDir>/',
        '<rootDir>/node_modules/',
        '<rootDir>/node_modules/jest-meteor-stubs/lib/',
    ],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/tests/mocks/styleMock.js",
        "\\.(gif|ttf|eot|svg|png|jpg)$": "<rootDir>/tests/mocks/fileMock.js",
        '^(.*):(.*)$': '$1_$2',
    },
    testURL: 'http://localhost/',
    setupFilesAfterEnv: [
        '<rootDir>tests/enzyme-setup.js'
    ],
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
