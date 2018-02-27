import { call, put, select } from 'redux-saga/effects';
import {
  authenticate,
  CLEAR,
  clear,
  getFormData,
  LOGIN_FAILED,
  loginFailed,
  PURGE_TOKEN,
  purgeToken,
  reducer,
  SAVE_TOKEN,
  saveToken,
  SUBMIT,
  submit,
} from './ducks';
import { fetchToken } from '../../api';

describe('actions', () => {
  it('should create CLEAR action', () => {
    const action = {
      type: CLEAR,
    };
    expect(clear()).toEqual(action);
  });

  it('should create SUBMIT action', () => {
    const action = {
      type: SUBMIT,
    };
    expect(submit()).toEqual(action);
  });

  it('should create SAVE_TOKEN action', () => {
    const action = {
      type: SAVE_TOKEN,
      token: 'secret',
    };
    expect(saveToken('secret')).toEqual(action);
  });

  it('should create PURGE_TOKEN action', () => {
    const action = {
      type: PURGE_TOKEN,
    };
    expect(purgeToken()).toEqual(action);
  });

  it('should create LOGIN_FAILED action', () => {
    const action = {
      type: LOGIN_FAILED,
    };
    expect(loginFailed()).toEqual(action);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer({})).toEqual({ error: false, token: null });
  });

  it('should add token to the store', () => {
    expect(reducer({}, saveToken('secret'))).toEqual({
      error: false,
      token: 'secret',
    });
  });

  it('should remove token from the store', () => {
    expect(reducer({ token: 'secret' }, purgeToken())).toEqual({
      error: false,
      token: null,
    });
  });

  it('should add error to the store', () => {
    expect(reducer({}, loginFailed())).toEqual({
      error: true,
      token: null,
    });
  });

  it('should remove error from the store', () => {
    expect(reducer({ error: true }, clear())).toEqual({
      error: false,
      token: null,
    });
  });
});

describe('sagas', () => {
  it('authenticate saga returns token', () => {
    const response = { token: 'secret' };
    const generator = authenticate();
    expect(generator.next().value).toEqual(select(getFormData));
    expect(generator.next(response).value).toEqual(call(fetchToken, response));
    expect(generator.next(response).value).toEqual(put(saveToken('secret')));
  });

  it('authenticate saga returns error', () => {
    const response = { error: 'error' };
    const generator = authenticate();
    expect(generator.next().value).toEqual(select(getFormData));
    expect(generator.next(response).value).toEqual(call(fetchToken, response));
    expect(generator.next(response).value).toEqual(put(loginFailed()));
  });
});
