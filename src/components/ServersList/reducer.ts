import {
  GET_SERVERS_LIST_SUCCESS,
  GET_SERVERS_LIST_FAILURE
} from '../../redux/actionsConst';
import { Server } from './types';

import { GetServersListActionTypes } from './actions';
export interface ServersListState {
  servers?: Server[];
  error?: string;
  isLoading: boolean;
}

export const initialState: ServersListState = {
  isLoading: true
};

export const serversList = (
  state = initialState,
  action: GetServersListActionTypes
): ServersListState => {
  switch (action.type) {
    case GET_SERVERS_LIST_SUCCESS:
      return {
        ...state,
        servers: action.data,
        isLoading: false
      };
    case GET_SERVERS_LIST_FAILURE:
      return {
        ...state,
        error: action.data.error
      };
    default:
      return state;
  }
};
