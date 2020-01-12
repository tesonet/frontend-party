import ActionTypes from "../constants/actionTypes";
import Urls from "../constants/apis";
import { get } from "../api";
import { navigate } from "@reach/router";

export const loggedIn = token => ({
  type: ActionTypes.LoggedIn as ActionTypes.LoggedIn,
  token
});

export const loggingIn = {
  type: ActionTypes.LoggingIn as ActionTypes.LoggingIn
};

export const loggedOut = {
  type: ActionTypes.LoggedOut as ActionTypes.LoggedOut
};

export const loginFailed = error => ({
  type: ActionTypes.LoginFailed as ActionTypes.LoginFailed,
  error
});

export const login = dispatch => async values => {
  dispatch(loggingIn);
  try {
    const { token } = await get(Urls.login, values);
    localStorage.setItem("token", token);
    dispatch(loggedIn(token));
    await navigate("/");
  } catch (error) {
    dispatch(loginFailed(error));
    throw new Error(error)
  }
};

export const logout = dispatch => {
  localStorage.removeItem("token");
  dispatch(loggedOut);
  navigate("/login");
};
