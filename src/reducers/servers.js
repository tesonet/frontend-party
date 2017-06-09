import { SERVERS_REQUEST, SERVERS_SUCCESS, LOGOUT, LOGIN_ERROR } from '../constants';

const defaultState = {
  loading: false,
  items: [],
};

const servers = (state = defaultState, action) => {
  switch (action.type) {
    case LOGOUT:
    case LOGIN_ERROR:
      return { ...defaultState };
    case SERVERS_REQUEST:
      return { ...state, loading: true };
    case SERVERS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    default:
      return state;
  }
};

export default servers;
