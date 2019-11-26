module.exports = {
  "Check title": function(browser) {
    browser
      .url("http://localhost:8080/")
      .waitForElementVisible("#password_input")
      .setValue("#username_input", "tesonet")
      .setValue("#password_input", "partyanimal")
      .click("#submit_button")
      .waitForElementVisible("#dashboard_header")
      .assert.title("Dashboard | Testio");
  },
  "Check if server list exist": function(browser) {
    browser
      .url("http://localhost:8080/dashboard")
      .waitForElementVisible("#dashboard_header")
      .waitForElementVisible("#server_list");
  },
  Logout: function(browser) {
    browser
      .url("http://localhost:8080/dashboard")
      .waitForElementVisible("#dashboard_header")
      .click("#logout_button")
      .waitForElementVisible("#password_input")
      .assert.title("Log In | Testio");
  },
  after: function(browser) {
    browser.end();
  }
};
