module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  moduleNameMapper: {
    '.(css|jpg|png)$': '<rootDir>/empty-module.js',
  },
  collectCoverageFrom: [
    'src/**/*.{js}',
    '!src/index.js',
  ],
};
