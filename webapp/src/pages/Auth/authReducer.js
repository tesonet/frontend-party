import { TYPE_LOG_IN, TYPE_LOG_OUT } from './authActions';
import api from '../../utils/api';

const defaultState = {
  isLoggedIn: api.getToken() !== null
};

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case TYPE_LOG_IN:
      return { ...state, isLoggedIn: true };
    case TYPE_LOG_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}
