import TokenAPI from "../../Utils/TokenAPI";
import Authentication from "../../Utils/Authentication";

export class LoginActionTypes {
  static USERNAME_CHANGE = Symbol("USERNAME_CHANGE");
  static PASSWORD_CHANGE = Symbol("PASSWORD_CHANGE");
  static LOADING_IN_PROGRESS = Symbol("LOADING_IN_PROGRESS");
  static AUTHENTICATION_ERROR = Symbol("AUTHENTICATION_ERROR");
  static AUTHENTICATION_SUCCESS = Symbol("AUTHENTICATION_SUCCESS");
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
      password: value
    };
  }

  static setLoadingInProgress() {
    return {
      type: LoginActionTypes.LOADING_IN_PROGRESS,
      isLoading: true
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
      return TokenAPI.retrieveToken(state.Login.username, state.Login.password).then(token => {
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