import * as actionTypes from './actionTypes';

export const fetchServersStart = () => ({
  type: actionTypes.FETCH_SERVERS_START,
});

export const fetchServersSuccess = servers => ({
  type: actionTypes.FETCH_SERVERS_SUCCESS,
  servers,
});

export const fetchServersFail = () => ({
  type: actionTypes.FETCH_SERVERS_FAIL,
});
