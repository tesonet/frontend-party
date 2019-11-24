import * as SERVERS_ACTION_TYPES from './constants';
import { ServersType } from './types';

export const DEFAULT_STATE = {
  all: null,
};

interface State {
  all: ServersType | null
}

interface Action {
  type: string,
  all: ServersType,
}

const setAll = (state: State, all: ServersType) => ({
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
