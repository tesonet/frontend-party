import axios from 'axios';
import { mapApiError, mapApiResponse } from './interceptors';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
  },
});

instance.interceptors.response.use(mapApiResponse, mapApiError);

export default instance;
