import * as actionTypes from './actionTypes';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = token => ({
  type: actionTypes.AUTH_SUCCESS,
  token,
});

export const authFail = err => ({
  type: actionTypes.AUTH_FAIL,
  err,
});
