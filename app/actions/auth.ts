import { push } from 'react-router-redux';

import { post } from 'Services/rest';

const AUTHENTICATION_API = process.env.AUTHENTICATION_API;

export enum AuthActionType {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOGOUT = 'LOGOUT',
}

export interface LoginSuccessAction {
  type: AuthActionType.LOGIN_SUCCESS;
  token: string;
}

export const loginSuccess = (token: string): LoginSuccessAction => ({
  token,
  type: AuthActionType.LOGIN_SUCCESS,
});

export interface LoginFailAction {
  type: AuthActionType.LOGIN_FAIL;
  reason: string;
}

export const loginFail = (reason: string): LoginFailAction => ({
  reason,
  type: AuthActionType.LOGIN_FAIL,
});

export interface LogoutAction {
  type: AuthActionType.LOGOUT;
}

export const logout = () => {
  return (dispatch: Function) => {
    dispatch({ type: AuthActionType.LOGOUT });
    dispatch(push('/login'));
  };
};

export const login = (username: string, password: string) => {
  return (dispatch: Function) => {
    return post(AUTHENTICATION_API, { username, password })
      .then(result => {
        if (result.message === 'Unauthorized') {
          dispatch(
            loginFail(
              'Failed to login. Please check your username and password.',
            ),
          );
        } else {
          dispatch(loginSuccess(result.token));
          dispatch(push('/'));
        }
      })
      .catch(err => {
        dispatch(
          loginFail(
            'Failed to login. Please check your username and password.',
          ),
        );
      });
  };
};
