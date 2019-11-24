import * as SERVERS_ACTION_TYPES from './constants';

export const getAll = () => ({
  type: SERVERS_ACTION_TYPES.GET_ALL,
});

export const getAllRequest = () => ({
  type: SERVERS_ACTION_TYPES.GET_ALL_REQUEST,
});

export const getAllSuccess = () => ({
  type: SERVERS_ACTION_TYPES.GET_ALL_SUCCESS,
});

export const getAllFailure = () => ({
  type: SERVERS_ACTION_TYPES.GET_ALL_FAILURE,
});

export const setAll = (all: any) => ({
  type: SERVERS_ACTION_TYPES.SET_ALL,
  all,
});


export const clearAll = () => ({
  type: SERVERS_ACTION_TYPES.CLEAR_ALL,
});
