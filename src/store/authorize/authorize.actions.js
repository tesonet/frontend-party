import { authorizeAPI } from 'data';

import * as types from './authorize.types';

const logIn = (values, history) => {
  return async dispatch => {
    dispatch({ type: types.BEFORE_AUTH });

    try {
      const authToken = await authorizeAPI.login(values);
      localStorage.setItem('token', authToken);

      dispatch({ type: types.AFTER_AUTH });

      history.push('/servers');
    } catch (error) {
      dispatch({ type: types.AFTER_AUTH_FAIL, payload: { error } });
    }
  };
};

const logOut = history => {
  return async dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: types.ON_LOGOUT });
    history.push('/');
  };
};

export default {
  logIn,
  logOut
};
