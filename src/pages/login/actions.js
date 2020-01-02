import { history } from '../../App';
import * as actionTypes from './actionTypes';
import { getUserToken } from '../../server/api/tesonetApi';
import errorMessages from './loginForm/errorMessages';

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
  type: actionTypes.SET_ERROR,
  payload: { message },
});

export const login = (values) => async (dispatch) => {
  dispatch(loading());
  const response = await getUserToken(values);
  if (response && response.ok) {
    const data = await response.json();
    localStorage.setItem('token', data.token);
    dispatch(token(data.token));
    history.push('/servers');
  } else if (response && response.status === 401) {
    dispatch(setError(errorMessages.WRONG_CREDENTIALS));
  } else {
    dispatch(setError(errorMessages.ERROR));
  }
};
