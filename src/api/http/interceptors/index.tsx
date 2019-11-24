import { AxiosRequestConfig, AxiosResponse } from 'axios';
import store from 'store';

export const mapApiResponse = (response: AxiosResponse): any => ({
  response: response && response.data,
});

export const mapApiError = (error: any): any => {
  const { response: { status, statusText, data: { message = '' } = {} } } = error;
  return ({
    error: {
      status,
      message: message || statusText,
    },
  });
};

export const addAuthHeaderIfTokenAvailable = (request: AxiosRequestConfig) => {
  const state = store.getState();
  const { token } = state.authentication;
  if (token) {
    request.headers.common.Authorization = token;
  }
  return request;
};
