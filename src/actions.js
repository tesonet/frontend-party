import axios from 'axios';
import {
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
  SERVERS_REQUEST,
  SERVERS_SUCCESS,
} from './constants';

const login = (username, password) => (
  (dispatch) => {
    dispatch({ type: LOGIN_ERROR, payload: false });
    axios.post('/api/tokens', {
      username, password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response && response.data && response.data.token) {
        dispatch({ type: LOGIN, payload: response.data.token });
      }
    }, (error) => {
      if (error && error.response && error.response.data && error.response.data.message) {
        dispatch({ type: LOGIN_ERROR, payload: error.response.data.message });
      }
    });
  }
);

const logout = () => (
  (dispatch) => {
    dispatch({ type: LOGOUT });
  }
);

const getServers = () => (
  (dispatch, getState) => {
    dispatch({ type: SERVERS_REQUEST });
    axios.get('/api/servers', {
      headers: { Authorization: getState().ui.token },
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
