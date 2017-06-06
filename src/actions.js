import axios from 'axios';
import { LOGIN, LOGIN_ERROR, LOGOUT } from './constants';

const login = (username, password) => (
  (dispatch) => {
    dispatch({ type: LOGIN_ERROR, payload: false });
    axios.post('http://playground.tesonet.lt/v1/tokens', {
      username, password
    }).then((response) => {
      if (response && response.data && response.data.token) {
        dispatch({ type: LOGIN, payload: response.data.token });
      }
    }, (error) => {
      dispatch({ type: LOGIN_ERROR, payload: error.response.data.message });
    });
  }
);

const logout = () => (
  (dispatch) => {
    dispatch({ type: LOGOUT });
  }
);

export { login, logout };
