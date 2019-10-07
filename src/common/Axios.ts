import { AxiosRequestConfig } from 'axios';
import Axios from 'axios-observable';

const AxiosProxy = <T>({ headers, ...request }: AxiosRequestConfig) =>
  Axios.request<T>({
    ...request,
    headers: {
      ...headers,
      Authorization: window.localStorage.getItem('auth_token'),
    },
  });

export { AxiosProxy as Axios };
