module.exports = {
  resetMocks: true,
  moduleNameMapper: {
    '@Common(.*)$': '<rootDir>/src/common',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};
