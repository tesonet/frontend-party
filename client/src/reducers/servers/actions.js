import * as types from './actionTypes';

export function fetch() {
  return {
    types: [types.FETCH, types.SUCCESS, types.FAILURE],
    api: (api) => api('/servers')
  }
}
