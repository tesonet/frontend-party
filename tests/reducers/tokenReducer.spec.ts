import { initAction } from './helpers';
import {
  authorizeErr,
  authorizeReq,
  authorizeRes,
  destroy,
  tokenReducer,
  ITokenReducer,
} from '../../src/reducers/tokenReducer';

test('should check initial state', () => {
  const reduced1 = tokenReducer(undefined, initAction());
  expect(reduced1).toEqual({
    authorized: false,
    authorizing: false,
    error: false,
    token: null,
    username: null,
  });
});

test('should make authorization in progress', () => {
  const reduced1 = tokenReducer(undefined, initAction());
  const reduced2 = tokenReducer(reduced1, authorizeReq({
    password: 'password',
    username: 'username',
  }));

  expect(reduced2).toEqual({
    authorized: false,
    authorizing: true,
    error: false,
    token: null,
    username: 'username',
  });
});

test('should make authorization', () => {
  const reduced1 = tokenReducer(undefined, initAction());
  const reduced2 = tokenReducer(reduced1, authorizeReq({
    password: 'password',
    username: 'username',
  }));
  const reduced3 = tokenReducer(reduced2, authorizeRes({
    token: 'token',
  }));

  expect(reduced3).toEqual({
    authorized: true,
    authorizing: false,
    error: false,
    token: 'token',
    username: 'username',
  });
});

test('should make authorize with error', () => {
  const reduced1 = tokenReducer(undefined, initAction());
  const reduced2 = tokenReducer(reduced1, authorizeReq({
    password: 'password',
    username: 'username',
  }));
  const reduced3 = tokenReducer(reduced2, authorizeErr());

  expect(reduced3).toEqual({
    authorized: false,
    authorizing: false,
    error: true,
    token: null,
    username: null,
  });
});

test('should logout user', () => {
  const reduced1: ITokenReducer = {
    authorized: true,
    authorizing: false,
    error: false,
    token: 'token',
    username: 'username',
  };
  const reduced2 = tokenReducer(reduced1, destroy());

  expect(reduced2).toEqual({
    authorized: false,
    authorizing: false,
    error: false,
    token: null,
    username: null,
  });
});
