import { createAction } from 'redux-actions';
import axios from 'axios';
import { push } from 'react-router-redux';

export const names = {
  LOGIN_ERROR: 'auth/LOGIN_ERROR',
  REGISTER_TOKEN: 'auth/REGISTER_TOKEN',
};

const loginError = createAction(names.LOGIN_ERROR);
const registerToken = createAction(names.REGISTER_TOKEN);

const login = ({ username, password }) => (dispatch) => {
  axios.post('/api/tokens', { username, password })
    .then(({ data: { token } }) => {
      localStorage.setItem('token', token);
      dispatch(registerToken(token));
      dispatch(push('/servers'));
    })
    .catch(() => {
      dispatch(loginError());
    });
};

const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(registerToken(null));
  dispatch(push('/login'));
};

export const actions = {
  login,
  registerToken,
  logout,
};

