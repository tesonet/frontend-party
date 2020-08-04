import axios from 'axios';
import { ActionsObservable } from 'redux-observable';
import Cookies from 'js-cookie';

import { actions as notificationActions } from '@redux/ducks/notifications';
import { actions as routeActions, RoutesMap } from '@redux/ducks/routes';
import reducer, { actions, UserCredentials, login as loginEpic, logout as logoutEpic } from './index';

jest.mock('js-cookie', () => ({ set: jest.fn(), get: jest.fn(), remove: jest.fn() }));

const userCredentials: UserCredentials = {
  username: 'username',
  password: 'password',
};

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('@auth/reducer', () => {
  const initialState = {
    isLoggedIn: false,
    isLoading: false,
  };

  it('should return initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should add loading state on login action', () => {
    expect(reducer(undefined, actions.login(userCredentials))).toEqual({ ...initialState, isLoading: true });
  });

  it('should add logged in state on loginSuccess action', () => {
    expect(reducer(undefined, actions.loginSuccess())).toEqual({ ...initialState, isLoggedIn: true });
  });

  it('should return initial state on loginFail action', () => {
    expect(reducer(undefined, actions.loginFail())).toEqual(initialState);
  });

  it('should add loading state on logout action', () => {
    expect(reducer(undefined, actions.logout())).toEqual({ ...initialState, isLoading: true });
  });

  it('should return initial state on logoutSuccess action', () => {
    expect(reducer(undefined, actions.logoutSuccess())).toEqual(initialState);
  });
});

describe('@auth/epic', () => {
  it('should handle failed login', async done => {
    const action$ = ActionsObservable.of(actions.login(userCredentials));

    mockedAxios.post.mockImplementationOnce(() => Promise.reject(new Error('error')));

    const streamValues = [
      actions.loginFail(),
      notificationActions.setNotification({ message: 'Unknown error occured', type: 'error' }),
    ];
    let index = 0;

    const observer = {
      next: (x: any) => {
        expect(x).toEqual(streamValues[index]);
        index++;
      },
      complete: () => done(),
    };

    // @ts-ignore
    loginEpic(action$).subscribe(observer);
  });

  it('should handle successful login', async done => {
    const action$ = ActionsObservable.of(actions.login(userCredentials));
    const token = '123';

    mockedAxios.post.mockImplementationOnce(() => Promise.resolve({ data: { token } }));

    const streamValues = [actions.loginSuccess(), routeActions.push(RoutesMap.HOME_ROUTE)];
    let index = 0;

    const observer = {
      next: (x: any) => {
        expect(x).toEqual(streamValues[index]);
        index++;
      },
      complete: () => {
        expect(Cookies.set).toHaveBeenCalledWith('token', token);
        done();
      },
    };

    // @ts-ignore
    loginEpic(action$).subscribe(observer);
  });

  it('should handle logout', async done => {
    const action$ = ActionsObservable.of(actions.logout());

    const streamValues = [actions.logoutSuccess(), routeActions.push(RoutesMap.LOGIN_ROUTE)];
    let index = 0;

    const observer = {
      next: (x: any) => {
        expect(x).toEqual(streamValues[index]);
        index++;
      },
      complete: () => {
        expect(Cookies.remove).toHaveBeenCalled();
        done();
      },
    };

    // @ts-ignore
    logoutEpic(action$).subscribe(observer);
  });
});
