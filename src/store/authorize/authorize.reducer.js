import * as types from './authorize.types';

export const initialState = { isLoading: false, error: null };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.BEFORE_AUTH:
      return {
        ...state,
        isLoading: true
      };
    case types.AFTER_AUTH:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case types.AFTER_AUTH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };
  }

  return state;
};
