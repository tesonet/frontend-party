import * as AUTHENTICATION_ACTION_TYPES from './constants';

const setToken = (state, token) => ({
  ...state,
  token,
});

export const DEFAULT_STATE = {
  token: null,
};

const authentication = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATION_ACTION_TYPES.SET_TOKEN:
      return setToken(state, action.token);
    default:
      return state;
  }
};

export default authentication;
