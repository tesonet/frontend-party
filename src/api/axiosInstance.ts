import axios from 'axios';
import BASE_URL from './baseURL';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
// @ts-ignore
const axiosInstance = new axios.create({
  cancelToken: source.token,
  baseURL: BASE_URL,
});

export const cancelAxiosRequest = () =>
  source.cancel('Operation canceled by the user.');

export default axiosInstance;
