import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { loginFlow, logoutFlow } from '../auth';
import { getToken } from '../../utils/api';
import { authSuccess, authError, authorize, logout } from '../../actions/auth';
import { LOCAL_STORE_TOKEN_KEY } from '../../constants/auth';
import reducer from '../../reducers/auth';


describe('# Auth page sagas', () => {
  const fakeCrediantials = {
    username: 'usernanme',
    password: 'password',
  };

  const initialState = fromJS({
    token: 'tokenInStorage',
    loading: false,
    error: null,
  });

  it('should successfully authorize', () => {
    const token = 'tokenToBeReturned';

    return expectSaga(loginFlow, fakeCrediantials)
      .provide([
        [call(getToken)], // eslint-disable-line redux-saga/yield-effects
        [matchers.call.fn(getToken), { token }],
      ])
      .withReducer(reducer)
      .put(authSuccess(token))
      .dispatch(authorize)
      .run()
      .then((result) => {
        expect(result.storeState.get('token')).toEqual(token);
        expect(localStorage.getItem(LOCAL_STORE_TOKEN_KEY)).toEqual(token);
      });
  });

  it('should successfully logout', () => (
    expectSaga(logoutFlow)
      .withReducer(reducer, initialState)
      .put(authSuccess())
      .dispatch(logout)
      .run()
      .then((result) => {
        expect(result.storeState.get('token')).toEqual(undefined);
        expect(localStorage.getItem(LOCAL_STORE_TOKEN_KEY)).toEqual(undefined);
      })
  ));

  it('should put authError with specified error', () => {
    const error = 'Error';

    return expectSaga(loginFlow, fakeCrediantials)
      .provide([
        [call(getToken)], // eslint-disable-line redux-saga/yield-effects
        [matchers.call.fn(getToken), throwError(error)],
      ])
      .put(authError(error))
      .dispatch(authorize)
      .run();
  });
});
