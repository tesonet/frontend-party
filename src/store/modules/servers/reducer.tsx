import * as SERVERS_ACTION_TYPES from './constants';
import { Servers } from './types';

export const DEFAULT_STATE = {
  all: null,
};

interface Action {
  type: string,
  all: Servers,
}

const setAll = (state: any, all: Servers) => ({
  ...state,
  all,
});

const clearAll = (state: any) => ({
  ...state,
  all: null,
});

const servers = (state: any = DEFAULT_STATE, action: Action) => {
  switch (action.type) {
    case SERVERS_ACTION_TYPES.SET_ALL:
      return setAll(state, action.all);
    case SERVERS_ACTION_TYPES.CLEAR_ALL:
      return clearAll(state);
    default:
      return state;
  }
};

export default servers;
