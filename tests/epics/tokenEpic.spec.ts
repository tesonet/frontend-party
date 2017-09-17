const REHYDRATE = 'REHYDRATE';
const fetchTokenByUsernameAndPassword = jest.fn();
const setAuthorizationToken = jest.fn();

jest.mock('redux-persist/constants', () => ({ REHYDRATE }));
jest.mock('../../src/services/RequestHTTP', () => ({ setAuthorizationToken }));
jest.mock('../../src/services/RequestToken', () => ({ fetchTokenByUsernameAndPassword }));

import configureStore from 'redux-mock-store';
import observableAsPromise from '../observableAsPromise';
import { tokenEpic } from '../../src/epics/tokenEpic';
import { authorizeErr, authorizeRehydrate, authorizeReq, authorizeRes, destroy } from '../../src/reducers/tokenReducer';
import { initialize } from '../../src/reducers/initializationReducer';
import { noop } from 'lodash';
import { ActionsObservable } from 'redux-observable';
import { Subject } from 'rxjs';

const mstore = configureStore();

test('should make success authorization request on authorizeReq action', async () => {
  fetchTokenByUsernameAndPassword.mockReturnValueOnce(Promise.resolve('token'));
  const subject = new Subject<any>();
  const observable = new ActionsObservable(subject);
  const stream = tokenEpic(observable, mstore() as any, null);
  const streamAsPromise = observableAsPromise(stream);
  subject.next(authorizeReq({ password: 'password', username: 'username' }));
  expect(await streamAsPromise).toEqual(authorizeRes({ token: 'token' }));
  expect(setAuthorizationToken).toHaveBeenLastCalledWith('token');
  expect(fetchTokenByUsernameAndPassword).toHaveBeenCalledWith('username', 'password');
});

test('should make error authorization and call authorizeErr', async () => {
  fetchTokenByUsernameAndPassword.mockReturnValueOnce(Promise.reject(new Error('request failed')));
  const subject = new Subject<any>();
  const observable = new ActionsObservable(subject);
  const stream = tokenEpic(observable, mstore() as any, null);
  const streamAsPromise = observableAsPromise(stream);
  subject.next(authorizeReq({ password: 'password', username: 'username' }));
  expect(await streamAsPromise).toEqual(authorizeErr());
  expect(fetchTokenByUsernameAndPassword).toHaveBeenCalledWith('username', 'password');
});

test('should initialize application', async () => {
  const store = configureStore()();
  const subject = new Subject<any>();
  const observable = new ActionsObservable(subject);
  tokenEpic(observable, store as any, null).subscribe(noop);
  subject.next({ type: REHYDRATE });
  expect(store.getActions()).toEqual([
    authorizeRehydrate(),
    initialize(),
  ]);
});

test('should call setAuthorizationToken when token is set', async () => {
  const store = configureStore()({ token: { token: 'token' } });
  const subject = new Subject<any>();
  const observable = new ActionsObservable(subject);
  tokenEpic(observable, store as any, null).subscribe(noop);
  subject.next(authorizeRes({ token: '' }));
  expect(setAuthorizationToken).toHaveBeenLastCalledWith('token');
  setAuthorizationToken.mockReset();
  subject.next(authorizeRehydrate());
  expect(setAuthorizationToken).toHaveBeenLastCalledWith('token');
});

test('should call setAuthorizationToken with null when authorize is destroyed', async () => {
  const store = configureStore()({ token: { token: null } });
  const subject = new Subject<any>();
  const observable = new ActionsObservable(subject);
  tokenEpic(observable, store as any, null).subscribe(noop);
  subject.next(destroy());
  expect(setAuthorizationToken).toHaveBeenLastCalledWith(null);
});
