import { RSAA } from 'redux-api-middleware';

import * as types from './actionTypes';

export const requestServers = () => ({
  [RSAA]: {
    method: 'GET',
    endpoint: '/servers',
    types: [types.REQUEST_SERVERS, types.REQUEST_SERVERS_SUCCESS, types.REQUEST_SERVERS_FAILURE],
  },
});
