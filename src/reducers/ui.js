import { LOGIN, LOGIN_ERROR, LOGOUT } from '../constants';

const defaultState = {
  token: false,
  loginError: false
};

const ui = (state = defaultState, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOGIN:
      return { ...state, token: payload, loginError: false };
    case LOGIN_ERROR:
      return { ...state, token: false, loginError: payload };
    case LOGOUT:
      return { ...state, token: false, loginError: false };
    default:
      return state;
  }
};

export default ui;
