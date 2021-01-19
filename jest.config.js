const {defaults} = require('jest-config');

module.exports = {
    ...defaults,
    verbose: true,
    transform: {
        "^.+\\.svg$": "jest-svg-transformer",
        "^.+\\.js$": "babel-jest"
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif)$": "<rootDir>/tests/__mocks__/fileMock.js"
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js']
};
