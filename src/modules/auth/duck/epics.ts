import { routeActions, routePath } from '@modules/routes/duck/actions';
import { toasterManagerActions } from '@modules/toaster/duck/actions';
import { EpicType } from '@redux/epicType';
import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { AuthActionTypes, authActions } from './actions';
import { GetAuthActions } from './model';

const login: EpicType<GetAuthActions<'login'>, Action> = (
  action$,
  _,
  { authService, localStorageService },
) =>
  action$.pipe(
    ofType(AuthActionTypes.Login),
    switchMap(({ payload: { credentials, callbackFn } }) =>
      authService.login(credentials).pipe(
        switchMap(({ data: { token } }) => {
          callbackFn();

          localStorageService.add('auth_token', token);

          return of(authActions.loginDone(), routeActions.open(routePath.root));
        }),
        catchError(e => {
          callbackFn();

          const errorText =
            e.response && e.response.status === 401
              ? 'Invalid credentials'
              : 'Request failed';

          return of(toasterManagerActions.error({ text: errorText }));
        }),
      ),
    ),
  );

const logout: EpicType<GetAuthActions<'logout'>, Action> = (
  action$,
  _,
  { localStorageService },
) =>
  action$.pipe(
    ofType(AuthActionTypes.Logout),
    switchMap(() => {
      localStorageService.remove('auth_token');
      return of(authActions.logoutDone(), routeActions.open(routePath.login));
    }),
    catchError(e => of(toasterManagerActions.error({ text: e.message }))),
  );

const getUserAuthStatus: EpicType<
  GetAuthActions<'getLoggedInStatus'>,
  Action
> = (action$, _, { localStorageService }) =>
  action$.pipe(
    ofType(AuthActionTypes.GetLoggedInStatus),
    switchMap(() =>
      of(localStorageService.get('auth_token')).pipe(
        switchMap(token => of(authActions.getLoggedInStatusDone(!!token))),
      ),
    ),
  );

export const authEpics = {
  login,
  logout,
  getUserAuthStatus,
};
