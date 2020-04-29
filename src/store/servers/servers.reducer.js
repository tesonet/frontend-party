import * as types from './servers.types';

export const initialState = { isLoading: false, servers: [], error: null };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.BEFORE_GET_SERVERS:
      return {
        ...state,
        isLoading: true
      };
    case types.AFTER_GET_SERVERS:
      return {
        ...state,
        isLoading: false,
        servers: payload.servers,
        error: null
      };
    case types.AFTER_GET_SERVERS_FAIL:
      return {
        ...state,
        isLoading: false,
        servers: [],
        error: payload.error
      };
  }

  return state;
};
