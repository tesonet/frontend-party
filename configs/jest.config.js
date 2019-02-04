module.exports = {
  "rootDir": "../",
  "testRegex": "(/src/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
  "transform": {
    "^.+\\.(ts|tsx)$": "<rootDir>/configs/ts.compile.js"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/configs/enzyme.setup.js"
  ]
}
