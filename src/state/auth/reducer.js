import * as types from './actionTypes';

const DEFAULT_AUTH_STATE = {
  data: null,
  fetching: false,
  error: null,
};

const reducer = (state = DEFAULT_AUTH_STATE, { type, payload }) => {
  switch (type) {
    case types.AUTHENTICATE:
      return {
        ...DEFAULT_AUTH_STATE,
        fetching: true,
      };
    case types.AUTHENTICATE_SUCCESS:
      return {
        ...DEFAULT_AUTH_STATE,
        data: payload,
      };
    case types.AUTHENTICATE_FAILURE:
      return {
        ...DEFAULT_AUTH_STATE,
        error: payload,
      };
    case types.LOGOUT:
      return {
        ...DEFAULT_AUTH_STATE,
      };
    default:
      return state;
  }
};

export default reducer;
