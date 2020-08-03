import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { Epic, ofType } from 'redux-observable';
import axios from 'axios';
import { Action } from 'redux';

import { storeToken, removeToken, getToken } from '@utils/token';
import { actions as routeActions, RoutesMap } from '@redux/ducks/routes';
import { actions as notificationActions } from '@redux/ducks/notifications';

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserState {
  isLoggedIn: boolean;
  isLoading: boolean;
}

enum AuthActionTypes {
  LOGIN_REQUEST = '@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
  LOGIN_FAIL = '@auth/LOGIN_FAIL',
  LOGOUT_REQUEST = '@auth/LOGOUT_REQUEST',
  LOGOUT_SUCCESS = '@auth/LOGOUT_SUCCESS',
}

const initialState: UserState = {
  isLoggedIn: !!getToken(),
  isLoading: false,
};

export const actions = {
  login: createAction(AuthActionTypes.LOGIN_REQUEST)<UserCredentials>(),
  loginSuccess: createAction(AuthActionTypes.LOGIN_SUCCESS)(),
  loginFail: createAction(AuthActionTypes.LOGIN_FAIL)(),
  logout: createAction(AuthActionTypes.LOGOUT_REQUEST)(),
  logoutSuccess: createAction(AuthActionTypes.LOGOUT_SUCCESS)(),
};

type AuthAction = ActionType<typeof actions>;

const reducer = createReducer(initialState)
  .handleAction(actions.login, (state: UserState) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(actions.loginSuccess, () => ({
    isLoggedIn: true,
    isLoading: false,
  }))
  .handleAction(actions.loginFail, () => initialState)
  .handleAction(actions.logout, (state: UserState) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(actions.logoutSuccess, () => initialState);

export const login: Epic<AuthAction, Action> = action$ =>
  action$.pipe(
    ofType(AuthActionTypes.LOGIN_REQUEST),
    switchMap(({ payload }: ActionType<typeof actions.login>) => {
      return from(axios.post(`${process.env.API_URL}/tokens`, { ...payload })).pipe(
        switchMap(({ data: { token } }) => {
          storeToken(token);
          return of(actions.loginSuccess(), routeActions.push(`${RoutesMap.HOME_ROUTE}`));
        }),
        catchError((err: any) => {
          const errorMessage =
            err.response && err.response.status === 401
              ? 'Invalid username and/or password'
              : 'Unknown error occured';

          return of(
            actions.loginFail(),
            notificationActions.setNotification({ message: errorMessage, type: 'error' }),
          );
        }),
      );
    }),
  );

export const logout: Epic<AuthAction, Action> = action$ =>
  action$.pipe(
    ofType(AuthActionTypes.LOGOUT_REQUEST),
    switchMap(() => {
      removeToken();
      return of(actions.logoutSuccess(), routeActions.push(RoutesMap.LOGIN_ROUTE));
    }),
  );

export const authEpic = [login, logout];

export default reducer;
