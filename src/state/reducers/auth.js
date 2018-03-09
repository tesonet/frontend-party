import get from 'lodash.get';

import {
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT_REQUESTED,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_ERROR_DISMISS,
} from '../../constants/actionTypes';
import { LOCAL_STORAGE_AUTH_TOKEN } from '../../constants/localStorage';
import getErrorMessage from '../../utils/getErrorMessage';
import { errors as copy } from '../../assets/copy/global.json';

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
      return { ...state, isLoading: false, token: get(action, 'token', null) };
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: getErrorMessage({ error: action.error, fallbackMessage: copy.errorAuth }),
      };
    case AUTH_ERROR_DISMISS:
      return { ...state, error: null };
    default:
      return state;
  }
}
