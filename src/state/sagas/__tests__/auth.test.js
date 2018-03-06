import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import {
  authLogin,
  authLogout,
  authSuccess,
  authError,
} from '../../actions/auth';
import { login, logout } from '../auth';
import authReducer from '../../reducers/auth';
import { getAuthToken } from '../../../utils/api';
import { LOCAL_STORAGE_AUTH_TOKEN } from '../../../constants/localStorage';
import { errors as copy } from '../../../assets/copy/global.json';

describe('Authentication sagas', () => {
  const token = 'auth-token-12345';
  const fakeUser = {
    username: 'John',
    password: 'Doe',
  };
  let initialState;

  beforeEach(() => {
    initialState = {
      token: null,
      isLoading: false,
      error: null,
    };
  });

  it('should log user in successfully.', () => {
    const expectedState = {
      ...initialState,
      token,
    };

    return expectSaga(login, fakeUser)
      .provide([
        [call(getAuthToken)],
        [matchers.call.fn(getAuthToken), token],
      ])
      .withReducer(authReducer, initialState)
      .put(authSuccess(token))
      .dispatch(authLogin)
      .hasFinalState(expectedState)
      .run()
      .then(() => {
        expect(localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)).toEqual(token);
      });
  });

  it('should log user out successfully.', () => {
    const expectedState = {
      ...initialState,
    };
    initialState = {
      ...initialState,
      token,
    };

    return expectSaga(logout)
      .withReducer(authReducer, initialState)
      .put(authSuccess())
      .dispatch(authLogout)
      .hasFinalState(expectedState)
      .run()
      .then(() => {
        expect(localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)).toEqual(null);
      });
  });

  it('should throw an error when empty credentials are provided.', () => {
    const error = copy.errorAuthFieldsEmpty;
    const expectedState = {
      ...initialState,
      error,
    };

    return expectSaga(login, {})
      .provide([
        [call(getAuthToken)],
        [matchers.call.fn(getAuthToken), throwError(error)],
      ])
      .withReducer(authReducer, initialState)
      .put(authError(error))
      .dispatch(authLogin)
      .hasFinalState(expectedState)
      .run();
  });

  it('should throw an error if something goes wrong during the request.', () => {
    const error = copy.errorAuth;
    const expectedState = {
      ...initialState,
      error,
    };

    return expectSaga(login, fakeUser)
      .provide([
        [call(getAuthToken)],
        [matchers.call.fn(getAuthToken), throwError(error)],
      ])
      .withReducer(authReducer, initialState)
      .put(authError(error))
      .dispatch(authLogin)
      .hasFinalState(expectedState)
      .run();
  });
});
