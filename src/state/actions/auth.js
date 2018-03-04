import {
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT_REQUESTED,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_ERROR_DISMISS,
} from '../../constants/actionTypes';

export const authLogin = (username, password) => ({
  type: AUTH_LOGIN_REQUESTED,
  username,
  password,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT_REQUESTED,
});

export const authSuccess = token => ({
  type: AUTH_SUCCESS,
  token,
});

export const authError = error => ({
  type: AUTH_ERROR,
  error,
});

export const authErrorDismiss = () => ({
  type: AUTH_ERROR_DISMISS,
});
