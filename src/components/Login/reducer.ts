import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../redux/actionsConst';

import { LoginActionTypes } from './actions';

export interface LoginState {
  token?: string;
  error?: string;
  authLoading: boolean;
}

export const initialState: LoginState = {
  authLoading: false
};

export const login = (
  state = initialState,
  action: LoginActionTypes
): LoginState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        authLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        authLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authLoading: false,
        error: action.data.error
      };
    default:
      return state;
  }
};
