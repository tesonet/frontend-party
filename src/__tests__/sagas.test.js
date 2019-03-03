import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import { apiFetchServers, apiFetchServersSuccess, apiFetchServersFailed } from '../redux/list/actions.js';
import { logIn, logInSuccess, logInError } from '../redux/auth/actions.js';
import { apiFetchServers as apiFetchServersSaga } from '../redux/list/sagas.js';
import { apiLogIn as loginSaga } from '../redux/auth/sagas.js';

describe('login flow', () => {
  const loginGenerator = cloneableGenerator(loginSaga)(logIn);

  test('login success', (done) => {
    const clone = loginGenerator.clone();
    clone.next();
    const apiResponse = {
      ok: true,
      json: () =>
        Promise.resolve({
          token: '12345',
        }),
    };
    const jsonPromise = clone.next(apiResponse).value;
    jsonPromise.then((json) => {
      expect(clone.next(json).value).toEqual(put(logInSuccess()));
      expect(clone.next().done).toEqual(true);
      done();
    });
  });

  test('login error', () => {
    const clone = loginGenerator.clone();
    clone.next();
    expect(clone.next({ ok: false }).value).toEqual(put(logInError('Login failed.')));
    expect(clone.next().done).toEqual(true);
  });
});

describe('data fetch flow', () => {
  const fetchGenerator = cloneableGenerator(apiFetchServersSaga)(apiFetchServers);

  test('fetch error', () => {
    const clone = fetchGenerator.clone();
    clone.next();
    const apiResponse = {
      ok: false,
      json: () => Promise.resolve({}),
    };
    expect(clone.next(apiResponse).value).toEqual(put(apiFetchServersFailed('Failed to fetch data.')));
    expect(clone.next().done).toEqual(true);
  });

  test('fetch success', (done) => {
    const clone = fetchGenerator.clone();
    clone.next();
    const demoData = [
      {
        name: 'test name',
        distance: 1337,
      },
    ];
    const apiResponse = {
      ok: true,
      json: () => Promise.resolve(demoData),
    };
    const jsonPromise = clone.next(apiResponse).value;
    jsonPromise.then((json) => {
      expect(clone.next(json).value).toEqual(put(apiFetchServersSuccess(demoData)));
      expect(clone.next().done).toEqual(true);
      done();
    });
  });
});
