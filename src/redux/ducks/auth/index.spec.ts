import axios from 'axios';
import { ActionsObservable } from 'redux-observable';

// import { storeToken } from '@utils/token';
import { actions as notificationActions } from '@redux/ducks/notifications';
import { actions as routeActions, RoutesMap } from '@redux/ducks/routes';
import reducer, { actions, UserCredentials, login as loginEpic, logout as logoutEpic } from './index';

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
  // let scheduler: TestScheduler;

  // beforeEach(
  //   () =>
  //     (scheduler = new TestScheduler((actual, expected) => {
  //       expect(actual).toEqual(expected);
  //     })),
  // );
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

    // scheduler.run(({ hot, expectObservable }) => {
    //   const action$ = hot('-a', {
    //     a: actions.login(userCredentials),
    //   });
    //   const expectedMarble = '---a';
    //   const expectedActions = {
    //     a: actions.loginFail(),
    //   };
    //   // @ts-ignore
    //   expectObservable(loginEpic(action$)).toBe(expectedMarble, expectedActions);
    // });
    // // @ts-ignore
    // loginEpic(action$, null, null).subscribe(actual => {
    //   expect(actual).toEqual(actions.loginFail());
    //   done();
    // });
  });

  it('should handle successful login', async done => {
    const action$ = ActionsObservable.of(actions.login(userCredentials));
    // const token = '123';

    mockedAxios.post.mockImplementationOnce(() => Promise.resolve({ data: {} }));

    const streamValues = [actions.loginSuccess(), routeActions.push(RoutesMap.HOME_ROUTE)];
    let index = 0;

    const observer = {
      next: (x: any) => {
        expect(x).toEqual(streamValues[index]);
        index++;
      },
      complete: () => done(),
    };

    // expect(storeToken).toBeCalledWith('asdas');

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
      complete: () => done(),
    };

    // expect(storeToken).toBeCalledWith('asdas');

    // @ts-ignore
    logoutEpic(action$).subscribe(observer);
  });
});
