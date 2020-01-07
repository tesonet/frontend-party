import * as types from '../types/auth.types';

export function getToken(username: string, password: string) {
  return {
    type: types.GET_TOKEN,
    username,
    password,
  };
}
export function removeToken() {
  localStorage.removeItem('token');
  return { type: types.REMOVE_TOKEN };
}

export function setAuthenticatedToTrue() {
  return { type: types.SET_AUTHENTICATED_TO_TRUE };
}
