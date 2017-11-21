import request, { serialize } from './request';

export const API_BASE_URL = 'http://playground.tesonet.lt/v1';
export const API_TOKEN_URL = `${API_BASE_URL}/tokens`;
export const API_SERVER_LIST_URL = `${API_BASE_URL}/servers`;

export const getToken = (username, password) =>
  request(API_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: serialize({ username, password }),
  });


export const getServerList = (token) =>
  request(API_SERVER_LIST_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default {
  request,
  getToken,
  getServerList,
};
