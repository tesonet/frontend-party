import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const INITIAL_STATE_SERVERS = Immutable({
  servers: [],
  error: null,
  isFetching: true
});

export default function serverReducer(
  state = INITIAL_STATE_SERVERS,
  { type, payload }
) {
  if (!sessionStorage.getItem('token')) {
    Immutable.merge(state, { servers: [] });
  }

  switch (type) {
    case types.GET_SERVERS_REQUEST:
      return Immutable.merge(state, { isFetching: true });
    case types.GET_SERVERS_SUCCESS:
      sortServers(payload.servers);
      return Immutable.merge(state, {
        servers: payload.servers,
        isFetching: false
      });
    case types.GET_SERVERS_FAILURE:
      return Immutable.merge(state, {
        error: payload.error,
        isFetching: false
      });
    case types.CLEAR_SERVERS:
      return Immutable.merge(state, { servers: [] });
    default:
      return state;
  }
}

const sortServers = servers => {
  servers.sort((a, b) => {
    if (a.distance - b.distance < 0) {
      return -1;
    } else if (a.distance === b.distance) {
      if (a.name.charAt(0) < b.name.charAt(0)) {
        return -1;
      } else return 1;
    } else return 1;
  });
};
