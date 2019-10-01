

export class LoginActionTypes {
  static USERNAME_CHANGE = Symbol();
  static PASSWORD_CHANGE = Symbol();
  static LOADING_IN_PROGRESS = Symbol();
  static AUTHENTICATION_ERROR = Symbol();
  static AUTHENTICATION_SUCCESS = Symbol();
}

export class LoginActions {

  static setUsername(value) {
    return {
      type: LoginActionTypes.USERNAME_CHANGE,
      username: value
    };
  }

  static setPassword(value) {
    return {
      type: LoginActionTypes.PASSWORD_CHANGE,
      username: value
    };
  }

  static setLoadingInProgress() {
    return {
      type: LoginActionTypes.LOADING_IN_PROGRESS,
      value: true
    };
  }

  static setAuthenticationFailure(value) {
    return {
      type: LoginActionTypes.AUTHENTICATION_ERROR,
      authenticationError: value,
      isLoading: false
    };
  }

  static setAuthenticationSuccess(value) {
    return {
      type: LoginActionTypes.AUTHENTICATION_SUCCESS,
      authenticationError: "",
      isLoading: false,
      token: value
    };
  }

  static performAuthentication() {
    return (dispatch, getState) => {
      dispatch(LoginActions.setLoadingInProgress());
      const state = getState();
      return Authentication.retrieveToken(state.Login.username, state.login.password).then(token => {
        if (token === "") {
          dispatch(LoginActions.setAuthenticationFailure("Authentication error, password or username may be incorrect, please try again."));
        } else {
          Authentication.storeToken(token);
          dispatch(LoginActions.setAuthenticationSuccess(token));
        }
      });
    };
  }
}

export default LoginActions;