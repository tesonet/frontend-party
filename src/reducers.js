import { combineReducers } from 'redux';
import { LOGIN, LOGIN_ERROR, LOGOUT } from './constants';

const ui = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload, loginError: false };
    case LOGIN_ERROR:
      return { ...state, token: false, loginError: action.payload };
    case LOGOUT:
      return { ...state, token: false, loginError: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ ui });

export default rootReducer;
