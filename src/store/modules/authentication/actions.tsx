import * as AUTHENTICATION_ACTION_TYPES from './constants';
import { Token } from './types';

export const init = (username: string, password: string) => ({
  type: AUTHENTICATION_ACTION_TYPES.INIT,
  username,
  password,
});

export const initLogout = () => ({
  type: AUTHENTICATION_ACTION_TYPES.INIT_LOGOUT,
});

export const initTokenStorage = (token: Token) => ({
  type: AUTHENTICATION_ACTION_TYPES.INIT_TOKEN_STORAGE,
  token,
});

export const setToken = (token: Token) => ({
  type: AUTHENTICATION_ACTION_TYPES.SET_TOKEN,
  token,
});

export const authRequest = () => ({
  type: AUTHENTICATION_ACTION_TYPES.AUTH_REQUEST,
});

export const authSuccess = () => ({
  type: AUTHENTICATION_ACTION_TYPES.AUTH_SUCCESS,
});

export const authFailure = () => ({
  type: AUTHENTICATION_ACTION_TYPES.AUTH_FAILURE,
});
