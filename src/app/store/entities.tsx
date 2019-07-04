import { Dispatch } from 'redux';
import { fetchWrapper } from '../utils/fetchWrapper/fetchWrapper';
import { Server } from '../types';
import { spinnerShowAction, spinnerHideAction, SPINNER_TIMEOUT } from './spinner';

export const FetchActionTypes = {
  SERVERS_FETCH_ERROR: 'SERVERS_FETCH_ERROR',
  SERVERS_FETCH_SUCCESS: 'SERVERS_FETCH_SUCCESS',
  SERVERS_CLEAR: 'SERVERS_CLEAR',
};

export function serversFetchErrorAction(error: string) {
  return { type: FetchActionTypes.SERVERS_FETCH_ERROR, error };
}

export function serversFetchSuccessAction(data: Server[]) {
  return { type: FetchActionTypes.SERVERS_FETCH_SUCCESS, data };
}

export function serversClearAction() {
  return { type: FetchActionTypes.SERVERS_CLEAR };
}

export function serversFetchThunk(dispatch: Dispatch, getState: () => any) {
  let status: number;
  const timeoutId = setTimeout(() => dispatch(spinnerShowAction()), SPINNER_TIMEOUT);
  return fetchWrapper('servers', undefined, getState().authentication.token)
    .then(
      (response) => {
        status = response.status;
        return response.json();
      },
      (error) => {
        return Promise.reject(error);
      })
    .then(
      response => {
        if (status === 200) {
          dispatch(serversFetchSuccessAction(response));
        } else {
          dispatch(serversFetchErrorAction(response.message));
        }
      },
      error => dispatch(serversFetchErrorAction(typeof (error) === 'string' ? error : error.message))
    ).finally(() => {
      clearTimeout(timeoutId);
      dispatch(spinnerHideAction());
    });
};

export type EntitiesSliceShape = {
  servers: Server[],
}

const initialState: EntitiesSliceShape = {
  servers: [],
}

export function entitiesReducer(state: EntitiesSliceShape = initialState, action: any): EntitiesSliceShape {
  switch (action.type) {
    case FetchActionTypes.SERVERS_FETCH_ERROR:
      return { servers: [] };
    case FetchActionTypes.SERVERS_FETCH_SUCCESS:
      return { servers: action.data };
    case FetchActionTypes.SERVERS_CLEAR:
      return { servers: [] };
    default:
      return state;
  }
}
