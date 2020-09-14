import {
  startAuthentication,
  authenticationSuccess,
  authenticationFailure,
  clearAuthenticationState,
} from '@/slices/authentication.slice';
import { setToken, removeToken } from '@/utils/localStorage';
import { post } from '../helpers';
import API from '../constants';

export const login = ({ username, password }) => async (dispatch) => {
  dispatch(clearAuthenticationState());
  dispatch(startAuthentication());
  const { token } = await post(`${API.DOMAIN}${API.AUTH}`, { username, password });
  if (!token) {
    dispatch(authenticationFailure());
    return;
  }
  setToken(token);
  dispatch(authenticationSuccess());
};

export const logout = () => (dispatch) => {
  removeToken();
  dispatch(clearAuthenticationState());
};
