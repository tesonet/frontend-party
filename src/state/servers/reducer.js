import * as types from './actionTypes';

const DEFAULT_STATE = {
  data: null,
  fetching: false,
  error: null,
};

const reducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case types.REQUEST_SERVERS:
      return {
        ...DEFAULT_STATE,
        fetching: true,
      };
    case types.REQUEST_SERVERS_SUCCESS:
      return {
        ...DEFAULT_STATE,
        data: payload,
      };
    case types.REQUEST_SERVERS_FAILURE:
      return {
        ...DEFAULT_STATE,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
