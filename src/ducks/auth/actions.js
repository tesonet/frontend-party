import { createAction } from 'redux-actions';
import { api } from '../../util/api';
import { push } from 'react-router-redux';
import { toastr } from 'react-redux-toastr';

export const names = {
  REGISTER_TOKEN: 'auth/REGISTER_TOKEN',
};

const registerToken = createAction(names.REGISTER_TOKEN);

const login = ({ username, password }) => dispatch => api.post('/tokens', { username, password })
  .then(({ data: { token } }) => {
    localStorage.setItem('token', token);
    dispatch(registerToken(token));
    dispatch(push('/servers'));
  })
  .catch(() => {
    toastr.error('Nope!', 'Please try harder.')
  });

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

