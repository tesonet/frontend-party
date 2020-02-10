import types from "../actions/types";
import fetchAuth from "../services/auth/auth";
import {
  setToLocalStorage,
  removeFromLocalStorage
} from "../utils/localStorage/localStorage";

export const loginRequested = () => ({
  type: types.LOGIN_REQUESTED
});

export const loginSuccessful = token => ({
  type: types.LOGIN_SUCCESSFUL,
  token
});

export const loginFailed = () => ({
  type: types.LOGIN_FAILED
});

export const loginClearError = () => ({
  type: types.LOGIN_CLEAR_ERROR
});

export const logout = () => ({
  type: types.LOGOUT
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
