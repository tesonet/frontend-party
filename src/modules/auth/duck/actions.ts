import { createAction } from '@redux/createAction';

import { Credentials } from './model';

export enum AuthActionTypes {
  GetLoggedInStatus = 'AUTH_GET_LOGGED_IN_STATUS',
  GetLoggedInStatusDone = 'AUTH_GET_LOGGED_IN_STATUS_DONE',
  Login = 'AUTH_LOGIN',
  LoginDone = 'AUTH_LOGIN_DONE',
  Logout = 'AUTH_LOGOUT',
  LogoutDone = 'AUTH_LOGOUT_DONE',
}

export const authActions = {
  login: (credentials: Credentials, callbackFn) =>
    createAction(AuthActionTypes.Login, { credentials, callbackFn }),
  loginDone: () => createAction(AuthActionTypes.LoginDone),
  logout: () => createAction(AuthActionTypes.Logout),
  logoutDone: () => createAction(AuthActionTypes.LogoutDone),
  getLoggedInStatus: () => createAction(AuthActionTypes.GetLoggedInStatus),
  getLoggedInStatusDone: (isLoggedIn: boolean) =>
    createAction(AuthActionTypes.GetLoggedInStatusDone, { isLoggedIn }),
};
