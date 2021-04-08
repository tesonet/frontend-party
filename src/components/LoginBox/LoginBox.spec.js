import React from "react";
import * as Enzyme from "enzyme";
import { Provider } from "react-redux";
import { LoginBox } from "./LoginBox";
import { getStore } from "../../app/store";
import {
  AUTHENTICATION_FAILED_MESSAGE,
  LOGIN_BUTTON_TEXT_DEFAULT,
  LOGIN_IN_PROGRESS_BUTTON_TEXT,
  PASSWORD_MISSING_MESSAGE,
  USERNAME_MISSING_MESSAGE
} from "./utils/constants";

let store = getStore();

describe("LoginBox", () => {
  const setup = (_props) => {
    const props = Object.assign({}, {
      errors: {},
    }, _props);
    const wrapper = Enzyme.mount((
      <Provider store={store}>
        <LoginBox {...props} />
      </Provider>
    ));

    return {
      wrapper,
      props
    };
  };

  it("login button should enabled and have 'Log in' text if login is not in progress", () => {
    const { wrapper } = setup();
    const loginButton = wrapper.find('[data-testid="login-button"]');
    expect(loginButton.text()).toBe(LOGIN_BUTTON_TEXT_DEFAULT);
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
    expect(loginButton.text()).toBe(LOGIN_IN_PROGRESS_BUTTON_TEXT);
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
      username: USERNAME_MISSING_MESSAGE,
      password: PASSWORD_MISSING_MESSAGE,
    };
    const { wrapper } = setup({
      errors: ERRORS
    });
    const usernameInput = wrapper.find('[data-testid="form-input-username"]');
    const passwordInput = wrapper.find('[data-testid="form-input-password"]');
    const usernameInputError = usernameInput.find('[data-testid="form-input-error"]');
    const passwordInputError = passwordInput.find('[data-testid="form-input-error"]');
    expect(usernameInputError.text()).toBe(AUTHENTICATION_FAILED_MESSAGE);
    expect(passwordInputError.text()).toBe(AUTHENTICATION_FAILED_MESSAGE);
  });
});