import {
  SERVER_LIST_FETCH,
  SERVER_LIST_RECEIVED,
  SERVER_LIST_ERROR,
} from './constants';

export const serverListFetch = (token) => ({
  type: SERVER_LIST_FETCH,
  token,
});

export const serverListReceived = (list) => ({
  type: SERVER_LIST_RECEIVED,
  list,
});

export const serverListError = (error) => ({
  type: SERVER_LIST_ERROR,
  error,
});
