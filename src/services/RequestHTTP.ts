import Axios from 'axios';
import { isNil } from 'lodash';

const AUTHORIZATION_HEADER = 'Authorization';

const adapter = Axios.create({
  baseURL: 'http://playground.tesonet.lt',
  timeout: 10 * 1000,
});

export const setAuthorizationToken = (token: string | null) => {
  if (!isNil(token)) {
    adapter.defaults.headers.common[AUTHORIZATION_HEADER] = `Bearer ${token}`;
  } else {
    delete adapter.defaults.headers.common[AUTHORIZATION_HEADER];
  }
};

export default adapter;
