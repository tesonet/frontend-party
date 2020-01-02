exports.config = {
  tests: '.acceptance/*_test.at.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      show: true,
      waitForNavigation: 'networkidle0',
    },
    MockRequest: {},
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'frontend-party',
}
