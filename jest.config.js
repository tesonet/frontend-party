module.exports = {
  resetMocks: true,
  moduleNameMapper: {
    '@Common(.*)$': '<rootDir>/src/common$1',
    '@Config(.*)$': '<rootDir>/src/config$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};
