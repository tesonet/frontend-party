import axios from 'axios';
import { API_URL } from '../../api/constants';
import { setToken } from '../../api/auth-token';

export const noop = () => null;

export const login = credentials => new Promise((resolve, reject) => axios.post(`${API_URL}tokens`, credentials)
  .then(
    (res) => {
      if (res.data && res.data.token) {
        setToken(res.data.token);
        return resolve(res.data.token);
      }
      reject(new Error('Invalid username/password.'));
      return null;
    },
    () => {
      reject(new Error('Invalid username/password.'));
    },
  ));
