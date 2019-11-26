import * as SERVERS_ACTION_TYPES from './constants';
import { Servers } from './types';

export const DEFAULT_STATE = {
  all: null,
};

type Action = {
  type: string;
  all: Servers;
}

export type State = {
  all: Servers | null;
}

const setAll = (state: State, all: Servers) => ({
  ...state,
  all,
});

const clearAll = (state: State) => ({
  ...state,
  all: null,
});

const servers = (state: State = DEFAULT_STATE, action: Action) => {
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
