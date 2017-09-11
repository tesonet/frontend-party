import axios from 'axios';

export const api = axios.create();

export const initApi = (store) => {
  api.interceptors.request.use((config) => {
    const { auth } = store.getState();
    const token = auth && auth.token;

    return {
      ...config,
      headers: {
        Authorization: token || '',
        ...config.headers,
      },
      url: `/api${config.url}`,
    };
  });
};
