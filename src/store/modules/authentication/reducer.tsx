import * as AUTHENTICATION_ACTION_TYPES from './constants';

export const DEFAULT_STATE = {
  token: null,
};

interface State {
  token: string | null
}

interface Action {
  type: string,
  token: string,
}

const setToken = (state: State, token: string) => ({
  ...state,
  token,
});

const authentication = (state: State = DEFAULT_STATE, action: Action) => {
  switch (action.type) {
    case AUTHENTICATION_ACTION_TYPES.SET_TOKEN:
      return setToken(state, action.token);
    default:
      return state;
  }
};

export default authentication;
