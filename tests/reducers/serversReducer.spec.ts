import { initAction } from './helpers';
import {
  destroyServerList,
  requestServerList,
  serversReducer,
  setServerList,
  setServerListError,
} from '../../src/reducers/serversReducer';

test('should create default state', () => {
  const reduced1 = serversReducer(undefined, initAction());

  expect(reduced1).toEqual({
    error: false,
    initializing: false,
    servers: [],
  });
});

test('should create requesting servers list state', () => {
  const reduced1 = serversReducer(undefined, initAction());
  const reduced2 = serversReducer(reduced1, requestServerList());

  expect(reduced2).toEqual({
    error: false,
    initializing: true,
    servers: [],
  });
});

test('should create requesting servers list state and then destroy it', () => {
  const reduced1 = serversReducer(undefined, initAction());
  const reduced2 = serversReducer(reduced1, requestServerList());
  const reduced3 = serversReducer(reduced2, destroyServerList());

  expect(reduced3).toEqual({
    error: false,
    initializing: false,
    servers: [],
  });
});

test('should set server list error', () => {
  const reduced1 = serversReducer(undefined, initAction());
  const reduced2 = serversReducer(reduced1, requestServerList());
  const reduced3 = serversReducer(reduced2, setServerListError());

  expect(reduced3).toEqual({
    error: true,
    initializing: false,
    servers: [],
  });
});

test('should set server list', () => {
  const server1 = { name: '', distance: 0 };
  const reduced1 = serversReducer(undefined, initAction());
  const reduced2 = serversReducer(reduced1, requestServerList());
  const reduced3 = serversReducer(reduced2, setServerList([server1]));

  expect(reduced3).toEqual({
    error: false,
    initializing: false,
    servers: [
      server1,
    ],
  });
});
