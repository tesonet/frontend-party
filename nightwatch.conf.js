const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const SCREENSHOT_PATH = "./screenshots/";

module.exports = {
  src_folders: ["tests"],
  output_folder: "./reports",
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    host: "127.0.0.1",
    port: 4444,
    cli_args: {
      "webdriver.chrome.driver": chromedriver.path
    }
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: "./screenshots"
      },
      globals: {
        waitForConditionTimeout: 5000
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["--no-sandbox"],
          w3c: false
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true
      }
    }
  }
};
