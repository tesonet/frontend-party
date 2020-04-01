import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../redux/actionsConst';

import { LoginActionTypes } from './actions';

export interface LoginState {
  token?: string;
  error: string | null;
  authLoading: boolean;
}

export const initialState: LoginState = {
  authLoading: false,
  error: null
};

export const login = (
  state = initialState,
  action: LoginActionTypes
): LoginState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        authLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        error: null,
        authLoading: false
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
