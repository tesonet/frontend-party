import { Persistence, Key_For_Token } from '../utils/persistence/persistence';
import { Dispatch } from 'redux';
import { fetchWrapper } from '../utils/fetchWrapper/fetchWrapper';
import { Credentials } from '../types';
import { spinnerShowAction, spinnerHideAction, SPINNER_TIMEOUT } from './spinner';

export const LoginActionTypes = {
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
};

export function loginErrorAction(error: string) {
  return { type: LoginActionTypes.LOGIN_ERROR, error };
}

export function loginSuccessAction(token: string) {
  Persistence.set(Key_For_Token, token);
  return { type: LoginActionTypes.LOGIN_SUCCESS, token };
}

export function logoutAction() {
  Persistence.remove(Key_For_Token);
  return { type: LoginActionTypes.LOGOUT };
}

export function authenticateThunk(credentials: Credentials) {
  return (dispatch: Dispatch, getState: () => any) => {
    let status: number;
    const timeoutId = setTimeout(() => dispatch(spinnerShowAction()), SPINNER_TIMEOUT);
    return fetchWrapper('tokens', credentials)
      .then(
        (response) => {
          status = response.status;
          return response.json();
        },
        (error) => {
          return Promise.reject(error);
        })
      .then(
        response => {
          if (status === 200) {
            dispatch(loginSuccessAction(response.token));
          } else {
            dispatch(loginErrorAction(response.message));
          }
        },
        error => dispatch(loginErrorAction(typeof (error) === 'string' ? error : error.message))
      ).finally(() => {
        clearTimeout(timeoutId);
        dispatch(spinnerHideAction());
      });
  };
}

export type AuthenticationSliceShape = {
  isAuthenticated: boolean,
  token: string|undefined,
  error: string|undefined,
}

const initialState: AuthenticationSliceShape = {
  isAuthenticated: !!Persistence.get(Key_For_Token),
  token: Persistence.get(Key_For_Token),
  error: undefined,
}

export function authenticationReducer(state: AuthenticationSliceShape = initialState, action: any): AuthenticationSliceShape {
  switch (action.type) {
    case LoginActionTypes.LOGIN_ERROR:
      return { isAuthenticated: false, token: undefined, error: action.error };
    case LoginActionTypes.LOGIN_SUCCESS:
      return { isAuthenticated: true, token: action.token, error: undefined };
    case LoginActionTypes.LOGOUT:
      return { isAuthenticated: false, token: undefined, error: undefined };
    default:
      return state;
  }
}