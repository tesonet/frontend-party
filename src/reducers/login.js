import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_ERROR, LOGOUT } from '../constants';

const defaultState = {
  token: false,
  error: false,
  loading: false,
};

const login = (state = defaultState, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: payload, error: false, loading: false };
    case LOGIN_REQUEST:
      return { ...state, token: false, error: false, loading: true };
    case LOGIN_ERROR:
      return { ...state, token: false, error: payload, loading: false };
    case LOGOUT:
      return { ...state, token: false, error: false, loading: false };
    default:
      return state;
  }
};

export default login;
