/* eslint-disable @typescript-eslint/no-var-requires */
const config = require("../jest.config");

module.exports = {
  ...config,
  rootDir: ".",
  testRegex: ".itest.tsx"
};
