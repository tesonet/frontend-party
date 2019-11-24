import axios from 'axios';
import { addAuthHeaderIfTokenAvailable, mapApiError, mapApiResponse } from './interceptors';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
  },
});

instance.interceptors.request.use(addAuthHeaderIfTokenAvailable);
instance.interceptors.response.use(mapApiResponse, mapApiError);

export default instance;
