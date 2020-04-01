import { call, put } from 'redux-saga/effects';
import { post } from '../../api';
import { LoginRequestAction, loginSuccess, loginFailure } from './actions';

export function* loginRequested({ data }: LoginRequestAction) {
  try {
    const response = yield call(
      post,
      'http://playground.tesonet.lt/v1/tokens',
      data
    );
    const { token } = response;
    localStorage.setItem('auth-token', token);
    yield put(loginSuccess());
  } catch (err){
    yield put(loginFailure({error: err.message}));
  }
}
