import {
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT_REQUESTED,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_ERROR_DISMISS,
} from '../../constants/actionTypes';
import { LOCAL_STORAGE_AUTH_TOKEN } from '../../constants/localStorage';

const initialState = {
  token: localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN),
  isLoading: false,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_REQUESTED:
      return { ...state, isLoading: true, error: null };
    case AUTH_LOGOUT_REQUESTED:
      return { ...state, isLoading: true, error: null };
    case AUTH_SUCCESS:
      return { ...state, isLoading: false, token: action.token };
    case AUTH_ERROR:
      return { ...state, isLoading: false, error: action.error.message };
    case AUTH_ERROR_DISMISS:
      return { ...state, error: null };
    default:
      return state;
  }
}
