import * as types from '../types/auth.types';

export const INITIAL_STATE = {
  authenticated: false,
  authenticating: false,
};

export default (state = INITIAL_STATE, action: any) => {
  const { type, error } = action;
  switch (type) {
    case types.GET_TOKEN:
      return { ...state, authenticating: true, error: null };
    case types.GET_TOKEN_FAILURE:
      return { ...state, authenticating: false, error };
    case types.GET_TOKEN_SUCCESS:
      return {
        ...state,
        authenticating: false,
        authenticated: true,
        error: null,
      };
    case types.SET_AUTHENTICATED_TO_TRUE:
      return {
        ...state,
        authenticating: false,
        authenticated: true,
      };
    case types.REMOVE_TOKEN:
      return INITIAL_STATE;
    default:
      return state;
  }
};
