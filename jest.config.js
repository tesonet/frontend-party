module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs,ts,tsx}"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
  setupFiles: ["<rootDir>/src/enzyme.ts"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src/__mocks__/styleMock.ts",
    "\\.(jpg|png)$": "<rootDir>/src/__mocks__/imgMock.ts"
  },
  verbose: false
};
