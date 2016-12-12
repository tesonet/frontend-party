import axios from 'axios';
import { API_URL } from '../constants/api';
import { AUTHENTICATE, AUTHENTICATION_ERROR } from '../constants/types';

export const authenticationError = error => ({
  type: AUTHENTICATION_ERROR,
  payload: error,
});

export const signinUserWithToken = () => ({
  type: AUTHENTICATE,
  payload: !!localStorage.getItem('token'),
});

export const signinUser = ({ username, password }) => (dispatch) => {
  dispatch(authenticationError(''));
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  axios.post(`${API_URL}/tokens`, { username, password }, config)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch({ type: AUTHENTICATE, payload: true });
    })
    .catch(() => {
      dispatch(authenticationError('Access Denied!'));
    });
};

export const signoutUser = () => {
  localStorage.removeItem('token');
  return { type: AUTHENTICATE, payload: false };
};
