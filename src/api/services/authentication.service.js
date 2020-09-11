import {
  startAuthentication,
  authenticationSuccess,
  authenticationFailure,
} from '@/slices/authentication.slice';
import { post } from '../helpers'
import { API } from '../constants';

export const login = ({ username, password }) => async dispatch => {
  dispatch(startAuthentication());
  const { token } = await post(`${API.DOMAIN}${API.AUTH}`, { username, password })
  if (!token) {
    dispatch(authenticationFailure())
    return;
  }
  dispatch(authenticationSuccess())
};

// export const logout = () => async dispatch => {
//   try {
//     // const res = await api.post('/api/auth/logout/')
//     return dispatch(logoutSuccess())
//   } catch (e) {
//     return console.error(e.message);
//   }
// }