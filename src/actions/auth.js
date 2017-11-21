import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGOUT_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from './types';

export const authorize = (username, password) => ({
  type: AUTH_LOGIN_REQUEST,
  username,
  password,
});

export const logout = () => ({
  type: AUTH_LOGOUT_REQUEST,
});

export const authSuccess = (token) => ({
  type: AUTH_SUCCESS,
  token,
});

export const authError = (error) => ({
  type: AUTH_ERROR,
  error,
});
