/* eslint-disable @typescript-eslint/no-var-requires */
const config = require("./jest.config");

module.exports = {
  ...config,
  testMatch: ["**/__integration__/**/*.ts?(x)"]
};
