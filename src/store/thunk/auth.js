import axios from '../../utility/axios';
import * as actions from '../actions/auth';
import { saveToken } from '../../utility/helpers/saveToken';

export const auth = (username, password) => dispatch => {
  dispatch(actions.authStart());
  const postData = {
    username,
    password,
  };
  axios
    .post('/tokens', postData)
    .then(res => {
      dispatch(actions.authSuccess(res.data.token)), dispatch(logoutTimeout(3600000));
      saveToken(res.data.token);
    })
    .catch(() => dispatch(actions.authFail())); // no error message in response
};

export const checkAuth = () => dispatch => {
  const token = localStorage.getItem('token');
  const expirationDate = new Date(localStorage.getItem('expirationDate'));
  if (!token || expirationDate < new Date()) {
    dispatch(signout());
  } else {
    dispatch(actions.authSuccess(token));
    dispatch(logoutTimeout(3600000));
    saveToken(token);
  }
};

export const signout = () => dispatch => {
  localStorage.clear();
  dispatch(actions.logout());
};

const logoutTimeout = expirationTime => dispatch => {
  setTimeout(() => {
    dispatch(signout());
  }, expirationTime);
};
