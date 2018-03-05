import {
  SERVER_LIST_REQUESTED,
  SERVER_LIST_RECEIVED,
  SERVER_LIST_ERROR,
} from '../../constants/actionTypes';

export const serverListRequest = token => ({
  type: SERVER_LIST_REQUESTED,
  token,
});

export const serverListReceive = serverList => ({
  type: SERVER_LIST_RECEIVED,
  serverList,
});

export const serverListError = error => ({
  type: SERVER_LIST_ERROR,
  error,
});
