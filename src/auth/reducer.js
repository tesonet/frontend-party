import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const INITIAL_STATE_AUTH = Immutable({
  isLogged: false,
  servers: [],
  error: null,
  isFetching: false
});

export default function authReducer(
  state = INITIAL_STATE_AUTH,
  { type, payload }
) {
  if (!!sessionStorage.getItem('token')) {
    Immutable.merge(state, { isLogged: true });
  }

  switch (type) {
    case types.AUTH_REQUEST:
      return Immutable.merge(state, { isFetching: true });
    case types.AUTH_SUCCESS:
      return Immutable.merge(state, {
        isLogged: true,
        token: payload.token,
        isFetching: false
      });
    case types.AUTH_FAILURE:
      return Immutable.merge(state, {
        error: payload.error,
        isFetching: false
      });
    case types.LOG_OUT:
      return { ...state, isLogged: false, servers: [] };
    default:
      return state;
  }
}
