import ActionTypes from "../constants/actionTypes";
import { Api, get } from "../api";
import { navigate } from "@reach/router";

export const loggedIn = token => ({
  type: ActionTypes.LoggedIn as ActionTypes.LoggedIn,
  token
});

export const loggingIn = {
  type: ActionTypes.LoggingIn as ActionTypes.LoggingIn
};

export const logout = () => ({
  type: ActionTypes.Logout as ActionTypes.Logout
});

export const loginFailed = error => ({
  type: ActionTypes.LoginFailed as ActionTypes.LoginFailed,
  error
});

export const login = dispatch => async values => {
  dispatch(loggingIn);
  try {
    const token = await get(Api.token, values);
    localStorage.setItem("token", token);
    dispatch(loggedIn(token));
    await navigate("/");
  } catch (error) {
    dispatch(loginFailed(error));
    console.log("error", error);
  }
};
