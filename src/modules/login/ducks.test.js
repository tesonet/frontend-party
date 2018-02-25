import { call, put, select } from 'redux-saga/effects';
import {
  authenticate,
  getFormData,
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
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer({})).toEqual({ token: null });
  });

  it('should add token to the store', () => {
    expect(reducer({}, saveToken('secret'))).toEqual({ token: 'secret' });
  });

  it('should remove token to the store', () => {
    expect(reducer({ token: 'secret' }, purgeToken())).toEqual({ token: null });
  });
});

describe('sagas', () => {
  it('authenticate saga works as expected', () => {
    const response = { token: 'secret' };
    const generator = authenticate();
    expect(generator.next().value).toEqual(select(getFormData));
    expect(generator.next(response).value).toEqual(call(fetchToken, response));
    expect(generator.next(response).value).toEqual(put(saveToken('secret')));
  });
});
