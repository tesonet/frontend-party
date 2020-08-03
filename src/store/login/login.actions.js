import loginConstants from './login.constants';
import { setStorageToken, deleteStorageToken } from '../../utils/localStorage';
import { getToken } from '../../utils/api';

const loginRequest = () => ({
  type: loginConstants.LOGIN_REQUEST,
});

const loginSuccess = (token) => ({
  type: loginConstants.LOGIN_SUCCESS,
  payload: token,
});

const loginFail = () => ({
  type: loginConstants.LOGIN_FAIL,
});

const logoutSuccess = () => ({
  type: loginConstants.LOGOUT,
});

export const login = (username, password) => (dispatch) => {
  dispatch(loginRequest());
  getToken(username, password)
    .then((res) => {
      setStorageToken('token', res.token);
      dispatch(loginSuccess(res.token));
    })
    .catch(() => {
      dispatch(loginFail());
    });
};

export const logout = () => (dispatch) => {
  dispatch(logoutSuccess());
  deleteStorageToken('token');
};
