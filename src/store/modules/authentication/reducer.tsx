import * as AUTHENTICATION_ACTION_TYPES from './constants';
import { Token } from './types';

export const DEFAULT_STATE = {
  token: null,
};

interface Action {
  type: string,
  token: Token,
}

const setToken = (state: any, token: string) => ({
  ...state,
  token,
});

const authentication = (state: any = DEFAULT_STATE, action: Action) => {
  switch (action.type) {
    case AUTHENTICATION_ACTION_TYPES.SET_TOKEN:
      return setToken(state, action.token);
    default:
      return state;
  }
};

export default authentication;
