import { expect } from 'chai';
import { routeActions, routePath } from 'modules/routes/duck/actions';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import * as sinon from 'sinon';

import { createMockAxiosResponse } from '../../../common/AxiosTestkit';

import { authActions } from './actions';
import { authEpics } from './epics';
import { Credentials } from './model';
import { AuthService } from './service';

const credentials: Credentials = {
  username: 'username',
  password: 'password',
};

const response = { token: '§' };

const localStorageService = {
  get: sinon.fake.returns('§'),
  add: sinon.spy(),
  remove: sinon.spy(),
};

const authService: AuthService = {
  login: () => of(createMockAxiosResponse({ data: { ...response } })),
};

describe('auth epics', () => {
  describe('login', () => {
    it('should log in', done => {
      const expected = authActions.loginDone();
      const action$ = ActionsObservable.of(
        authActions.login(credentials, () => null),
      );

      authEpics
        .login(action$, null, { authService, localStorageService })
        .subscribe(actual => {
          if (actual.type === 'AUTH_LOGIN_DONE') {
            expect(actual).to.deep.eq(expected);
            done();
          }
        });
    });

    it('should fire a callback', done => {
      const callbackFn = sinon.spy();
      const action$ = ActionsObservable.of(
        authActions.login(credentials, callbackFn),
      );

      authEpics
        .login(action$, null, { authService, localStorageService })
        .subscribe(actual => {
          expect(callbackFn.calledOnce);
          if (actual.type === 'AUTH_LOGIN_DONE') {
            done();
          }
        });
    });

    it('should set token', done => {
      const action$ = ActionsObservable.of(
        authActions.login(credentials, () => null),
      );

      authEpics
        .login(action$, null, { authService, localStorageService })
        .subscribe(actual => {
          expect(localStorageService.add.calledOnce);
          if (actual.type === 'AUTH_LOGIN_DONE') {
            done();
          }
        });
    });
  });

  describe('logout', () => {
    it('should remove token', done => {
      const expected = authActions.logoutDone();
      const action$ = ActionsObservable.of(authActions.logout());

      authEpics
        .logout(action$, null, { localStorageService })
        .subscribe(actual => {
          expect(localStorageService.remove.calledOnce);
          if (actual.type === 'AUTH_LOGOUT_DONE') {
            expect(actual).to.deep.eq(expected);
            done();
          }
        });
    });

    it('should redirect to login', done => {
      const expected = routeActions.open(routePath.login);
      const action$ = ActionsObservable.of(authActions.logout());

      authEpics
        .logout(action$, null, { localStorageService })
        .subscribe(actual => {
          if (actual.type === 'ROUTE_PUSH') {
            expect(actual).to.deep.eq(expected);
            done();
          }
        });
    });
  });

  describe('getUserAuthStatus', () => {
    it('should check if token exists', done => {
      const expected = authActions.getLoggedInStatusDone(true);
      const action$ = ActionsObservable.of(authActions.getLoggedInStatus());

      authEpics
        .getUserAuthStatus(action$, null, { localStorageService })
        .subscribe(actual => {
          expect(actual).to.deep.eq(expected);
          done();
        });
    });
  });
});
