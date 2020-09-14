module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/utils/assetsTransformer.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
