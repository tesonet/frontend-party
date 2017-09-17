import { createAction, handleActions, Action } from 'redux-actions';
import { IServerEntity } from '../services/RequestServers';

export interface IServersReducer {
  error: boolean;
  initializing: boolean;
  servers: IServerEntity[];
}

export type IPayloadServerList = IServerEntity[];

const initialState: IServersReducer = {
  error: false,
  initializing: false,
  servers: [],
};

const PREFIX = 'serversReducer';
export const requestServerList = createAction(`${PREFIX}/requestServerList`,
  () => null);
export const destroyServerList = createAction(`${PREFIX}/destroyServerList`,
  () => null);
export const setServerList = createAction(`${PREFIX}/setServerList`,
  (payload: IPayloadServerList) => payload);
export const setServerListError = createAction(`${PREFIX}/setServerListError`,
  () => null);

export const serversReducer = handleActions<any>({
  [requestServerList.toString()](
    state: IServersReducer,
  ): IServersReducer {
    return {
      ...state,
      error: false,
      initializing: true,
    };
  },
  [destroyServerList.toString()](
    state: IServersReducer,
  ): IServersReducer {
    return {
      ...state,
      error: false,
      initializing: false,
      servers: [],
    };
  },
  [setServerList.toString()](
    state: IServersReducer,
    action: Action<IPayloadServerList>,
  ): IServersReducer {
    return {
      ...state,
      error: false,
      initializing: false,
      servers: action.payload!,
    };
  },
  [setServerListError.toString()](
    state: IServersReducer,
  ): IServersReducer {
    return {
      ...state,
      error: true,
      initializing: false,
    };
  },
}, initialState);
