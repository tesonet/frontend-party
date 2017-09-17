const fetchServersList = jest.fn();

jest.mock('../../src/services/RequestServers', () => ({ fetchServersList }));

import configureStore from 'redux-mock-store';
import observableAsPromise from '../observableAsPromise';
import { serversEpic } from '../../src/epics/serversEpic';
import { requestServerList, setServerList, setServerListError } from '../../src/reducers/serversReducer';
import { ActionsObservable } from 'redux-observable';
import { Subject } from 'rxjs';

const mstore = configureStore();

test('should call fetchServersList and set servers data', async () => {
  const server1 = { name: 'server', distance: 0 };
  const subject = new Subject<any>();
  const observable = new ActionsObservable(subject);
  const stream = serversEpic(observable, mstore() as any, null);
  const streamAsPromise = observableAsPromise(stream);
  fetchServersList.mockReturnValueOnce(Promise.resolve([server1]));
  subject.next(requestServerList());
  expect(await streamAsPromise).toEqual(setServerList([server1]));
  expect(fetchServersList).toHaveBeenCalled();
});

test('should call fetchServersList and call error', async () => {
  const subject = new Subject<any>();
  const observable = new ActionsObservable(subject);
  const stream = serversEpic(observable, mstore() as any, null);
  const streamAsPromise = observableAsPromise(stream);
  fetchServersList.mockReturnValueOnce(Promise.reject('http failed'));
  subject.next(requestServerList());
  expect(await streamAsPromise).toEqual(setServerListError());
  expect(fetchServersList).toHaveBeenCalled();
});
