module.exports = {
  resetMocks: true,
  moduleNameMapper: {
    '@Common(.*)$': '<rootDir>/src/common',
    '@Config(.*)$': '<rootDir>/src/config$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};
