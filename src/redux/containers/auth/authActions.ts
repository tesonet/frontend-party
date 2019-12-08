import { action, ActionType } from '../../actions';

export enum AuthActionTypes {
  login = 'LOGIN',
  loginSuccess = 'LOGIN_SUCCESS',
  loginError = 'LOGIN_ERROR',
  logout = 'LOGOUT'
}

export const AuthActions = {
  login: () => action(AuthActionTypes.login),
  loginSuccess: (token: string) => action(AuthActionTypes.loginSuccess, { token }),
  loginError: (error: any) => action(AuthActionTypes.loginError, { error }),
  logout: () => action(AuthActionTypes.logout)
};

export type AuthActions = ActionType<typeof AuthActions>;