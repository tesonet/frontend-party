import { ApiUtil } from './apiUtil.js';

export function getServers() {
  return ApiUtil('/servers', 'GET', null, true);
}

export function getToken(payload) {
  return ApiUtil('/tokens', 'POST', payload);
}