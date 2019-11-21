import http from './http';

export const authorize = (username, password) => http.post('tokens', {
  username, password,
});
