import React from "react";

import LoginBox from "./LoginBox";
import { getStore } from "../../app/store";
import { mountWithIntl } from "../../utils/testsUtils";
import messages from "./messages";

let store = getStore();

describe("LoginBox", () => {
  const setup = (_props) => {
    const props = Object.assign({}, {
      errors: {},
    }, _props);

    const wrapper = mountWithIntl(<LoginBox {...props} />, store);

    return {
      wrapper,
      props
    };
  };

  it("login button should enabled and have 'Log in' text if login is not in progress", () => {
    const { wrapper } = setup();
    const loginButton = wrapper.find('[data-testid="login-button"]');
    expect(loginButton.text()).toBe(messages.loginButtonTextDefault.defaultMessage);
    expect(loginButton.prop("disabled")).toBe(false);
  });

  it("login button should be disabled and have 'Logging in...' text if login is in progress", () => {
    const currentState = store.getState();
    store.getState = () => ({
      ...currentState,
      loginBox: {
        isLoginInProgress: true
      }
    });
    const { wrapper } = setup();
    const loginButton = wrapper.find('[data-testid="login-button"]');
    expect(loginButton.text()).toBe(messages.loginInProgressButtonText.defaultMessage);
    expect(loginButton.prop("disabled")).toBe(true);
  });

  it("should show 'Invalid username or password. Please try again.' if authentication failed", () => {
    const currentState = store.getState();
    store.getState = () => ({
      ...currentState,
      loginBox: {
        authenticationFailed: true
      }
    });
    const ERRORS = {
      username: messages.usernameMissingMessage.defaultMessage,
      password: messages.passwordMissingMessage.defaultMessage,
    };
    const { wrapper } = setup({
      errors: ERRORS
    });
    const usernameInput = wrapper.find('[data-testid="form-input-username"]');
    const passwordInput = wrapper.find('[data-testid="form-input-password"]');
    const usernameInputError = usernameInput.find('[data-testid="form-input-error"]');
    const passwordInputError = passwordInput.find('[data-testid="form-input-error"]');
    expect(usernameInputError.text()).toBe(messages.authenticationFailedMessage.defaultMessage);
    expect(passwordInputError.text()).toBe(messages.authenticationFailedMessage.defaultMessage);
  });
});