import * as actionTypes from './actionTypes';

export const token = (authToken) => ({
  type: actionTypes.SET_TOKEN,
  payload: { authToken },
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});

export const loading = () => ({
  type: actionTypes.LOADING,
});

export const setError = (message) => ({
  type: actionTypes.ERROR,
  payload: { message },
});
