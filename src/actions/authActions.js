import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOGIN_CLEAR_ERROR,
  LOGOUT
} from "./types";
import fetchAuth from "../services/auth/auth";
import {
  setToLocalStorage,
  removeFromLocalStorage
} from "../utils/localStorage/localStorage";

export const loginRequested = () => ({
  type: LOGIN_REQUESTED
});

export const loginSuccessful = token => ({
  type: LOGIN_SUCCESSFUL,
  payload: token
});

export const loginFailed = () => ({
  type: LOGIN_FAILED
});

export const loginClearError = () => ({
  type: LOGIN_CLEAR_ERROR
});

export const logout = () => ({
  type: LOGOUT
});

export const onLogin = user => async dispatch => {
  dispatch(loginRequested());
  try {
    const { token } = await fetchAuth(user);
    setToLocalStorage("token", token);
    dispatch(loginSuccessful(token));
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const onLogout = () => dispatch => {
  removeFromLocalStorage("token");
  dispatch(logout());
};
