import axios from 'axios';
import { actions as authActions } from '../ducks/auth/actions';

export const addRequestAuthInterceptor = store => {
  axios.interceptors.request.use(config => {
    const { token } = store.getState().auth;
    config.headers = {
      Authorization: token || "",
      ...config.headers
    }
    return config
  })
}

export const loadPersistedToken = store => {
  store.dispatch(authActions.registerToken(localStorage.getItem('token')));
}
