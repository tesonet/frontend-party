module.exports = {
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  testEnvironment: 'jest-environment-jsdom-sixteen',
  testResultsProcessor: 'jest-sonar-reporter',
  testURL: 'http://localhost/',
  setupFiles: [
    '<rootDir>/utils/testSetup.tsx'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|svg|ttf|woff|woff2)$': '<rootDir>/utils/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/utils/styleMock.js'
  },
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true
      }
    }
  },
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/__tests__/**',
    '!**/__mocks__/**'
  ],
  coverageReporters: [
    'json',
    'lcov',
    'clover'
  ],
  preset: 'ts-jest'
};
