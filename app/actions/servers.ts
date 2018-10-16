import { secureGet } from 'Services/rest';
import { Server } from 'Interfaces/common';
import { ReduxState } from 'Reducers/index';

import { logout } from './auth';

const FETCH_SERVERS_URL = process.env.SERVERS_API;

export enum ServersActionType {
  FETCH_SERVERS_SUCCESS = 'FETCH_SERVERS_SUCCES',
  FETCH_SERVERS_FAIL = 'FETCH_SERVERS_FAIL',
}

export interface FetchServersSuccessAction {
  type: ServersActionType.FETCH_SERVERS_SUCCESS;
  servers: Server[];
}

export const fetchServersSuccess = (
  servers: Server[],
): FetchServersSuccessAction => ({
  servers,
  type: ServersActionType.FETCH_SERVERS_SUCCESS,
});

export const fetchServers = () => {
  return (dispatch: Function, getState: () => ReduxState) => {
    const token = getState().auth.token;
    return secureGet(FETCH_SERVERS_URL, token)
      .then(result => {
        if (result.message === 'Unauthorized') {
          dispatch(logout());
        } else {
          const sorted = result.sort((a, b) => {
            const diff = a.distance - b.distance;
            if (diff !== 0) {
              return diff;
            }
            return a.name > b.name ? 1 : -1;
          });
          dispatch(fetchServersSuccess(sorted));
        }
      })
      .catch(err => {
        dispatch(logout());
      });
  };
};
