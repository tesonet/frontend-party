import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGOUT,
  SERVERS_REQUEST,
  SERVERS_SUCCESS,
} from './constants';

const login = (username, password) => (
  (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    const data = { username, password };
    const params = { headers: { 'Content-Type': 'application/json' } };

    axios.post('/api/tokens', data, params).then((response) => {
      if (response && response.data && response.data.token) {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
      }
    }, (error) => {
      if (error && error.response && error.response.data && error.response.data.message) {
        dispatch({ type: LOGIN_ERROR, payload: error.response.data.message });
      }
    });
  }
);

const logout = () => ({ type: LOGOUT });

const getServers = () => (
  (dispatch, getState) => {
    dispatch({ type: SERVERS_REQUEST });
    axios.get('/api/servers', {
      headers: { Authorization: getState().login.token },
    }).then((response) => {
      dispatch({ type: SERVERS_SUCCESS, payload: response.data });
    }, (error) => {
      if (error && error.response && error.response.data && error.response.data.message) {
        dispatch({ type: LOGIN_ERROR, payload: error.response.data.message });
      }
    });
  }
);

export { login, logout, getServers };
