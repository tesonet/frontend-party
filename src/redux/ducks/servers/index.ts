import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { Epic, ofType } from 'redux-observable';
import axios from 'axios';

import { getToken } from '@utils/token';
import { actions as authActions } from '@redux/ducks/auth';
import { Server } from '@typings/servers';

export interface ServersState {
  servers: Server[];
  isLoading: boolean;
}

enum ServersActionTypes {
  FETCH_SERVERS = '@servers/FETCH_SERVERS',
  FETCH_SERVERS_SUCCESS = '@servers/FETCH_SERVERS_SUCCESS',
  FETCH_SERVERS_FAIL = '@servers/FETCH_SERVERS_FAIL',
}

const initialState: ServersState = {
  servers: [],
  isLoading: false,
};

export const actions = {
  fetchServers: createAction(ServersActionTypes.FETCH_SERVERS)(),
  fetchServersSuccess: createAction(ServersActionTypes.FETCH_SERVERS_SUCCESS)<Server[]>(),
  fetchServersFail: createAction(ServersActionTypes.FETCH_SERVERS_FAIL)(),
};

const reducer = createReducer(initialState)
  .handleAction(actions.fetchServers, (state: ServersState) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(
    actions.fetchServersSuccess,
    (_state: ServersState, { payload }: ActionType<typeof actions.fetchServersSuccess>) => ({
      servers: payload,
      isLoading: false,
    }),
  )
  .handleAction(actions.fetchServersFail, () => initialState);

const fetchServers: Epic<any> = action$ =>
  action$.pipe(
    ofType(ServersActionTypes.FETCH_SERVERS),
    switchMap(() =>
      from(axios.get(`${process.env.API_URL}/servers`, { headers: { authorization: getToken() } })).pipe(
        switchMap(({ data }) => {
          console.log(data);
          return of(actions.fetchServersSuccess(data));
        }),
        catchError((err: any) => {
          console.log(err.response.status);
          if (err?.response?.status === 401) {
            return of(actions.fetchServersFail(), authActions.logout());
          }
          return of(actions.fetchServersFail());
        }),
      ),
    ),
  );

export const serversEpic = [fetchServers];

export default reducer;
