import {
  GET_SERVERS_LIST_REQUEST,
  GET_SERVERS_LIST_SUCCESS,
  GET_SERVERS_LIST_FAILURE
} from '../../redux/actionsConst';
import { Server } from './types';

import { GetServersListActionTypes } from './actions';
export interface ServersListState {
  servers?: Server[];
  error?: string;
}

export const initialState: ServersListState = {};

export const serversList = (
  state = initialState,
  action: GetServersListActionTypes
): ServersListState => {
  switch (action.type) {
    case GET_SERVERS_LIST_REQUEST:
      return {
        ...state
      };
    case GET_SERVERS_LIST_SUCCESS:
      return {
        ...state,
        servers: action.data
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
