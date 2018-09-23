// @flow

import { call, put, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import axios from 'axios';

import { LOGIN_ACTION, LOGIN_SUCCESS } from '../actions/constants';
import type { LoginActionPayload } from '../actions/LoginAction';
import { API_URL } from '../../constants/constants';

type handleLoginSagaArgs = {
  payload: LoginActionPayload,
  type: string,
};

export function* handleLoginSaga({ payload: { username, password } }: handleLoginSagaArgs): Saga<void> {
  try {
    const { data } = yield call(axios.post, `${API_URL}/tokens`, {
      username,
      password,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put({ type: LOGIN_SUCCESS });
    localStorage.setItem('token', data.token);
  } catch (e) {
    throw e;
  }
}

export function* loginSaga(): Saga<void> {
  yield takeLatest(LOGIN_ACTION, handleLoginSaga);
}
