module.exports = {
  "Check login page title is correct": function(browser) {
    browser
      .url("http://localhost:8080/")
      .waitForElementVisible("#password_input")
      .assert.title("Log In | Testio");
  },
  "Logging with good credentials": function(browser) {
    browser
      .url("http://localhost:8080/")
      .waitForElementVisible("#password_input")
      .setValue("#username_input", "tesonet")
      .setValue("#password_input", "partyanimal")
      .click("#submit_button")
      .waitForElementVisible("#dashboard_header")
      .assert.title("Dashboard | Testio");
  },
  "Logging with wrong credentials": function(browser) {
    browser
      .url("http://localhost:8080/login")
      .waitForElementVisible("#password_input")
      .setValue("#username_input", "wrongusername")
      .setValue("#password_input", "wrongpassword")
      .click("#submit_button")
      .waitForElementVisible("#error_message")
      .assert.containsText(
        "#error_message",
        "The username or password is incorrect"
      );
  },
  "Submitting blank form": function(browser) {
    browser
      .url("http://localhost:8080/login")
      .waitForElementVisible("#password_input")
      .click("#submit_button")
      .assert.cssClassPresent(
        "#username_input_wrapper",
        "loginForm__textInputWrapper--error"
      )
      .assert.cssClassPresent(
        "#password_input_wrapper",
        "loginForm__textInputWrapper--error"
      );
  },
  "Submitting blank form and then correct form": function(browser) {
    browser
      .url("http://localhost:8080/login")
      .waitForElementVisible("#password_input")
      .click("#submit_button")
      .assert.cssClassPresent(
        "#username_input_wrapper",
        "loginForm__textInputWrapper--error"
      )
      .assert.cssClassPresent(
        "#password_input_wrapper",
        "loginForm__textInputWrapper--error"
      )
      .setValue("#username_input", "tesonet")
      .setValue("#password_input", "partyanimal")
      .assert.not.cssClassPresent(
        "#username_input_wrapper",
        "loginForm__textInputWrapper--error"
      )
      .assert.not.cssClassPresent(
        "#password_input_wrapper",
        "loginForm__textInputWrapper--error"
      )
      .click("#submit_button")
      .waitForElementVisible("#dashboard_header")
      .assert.title("Dashboard | Testio");
  },
  after: function(browser) {
    browser.end();
  }
};
