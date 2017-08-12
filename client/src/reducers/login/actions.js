import * as types from './actionTypes';

export function login(data) {
  return {
    types: [types.FETCH_TOKEN, types.TOKEN_SUCCESS, types.TOKEN_FAILURE],
    api: (api) => api('/tokens', Object.assign({}, data, { method: 'POST' }))
  }
}

export function logout(data) {
  return {
    type: types.LOGOUT,
  }
}
