// @flow

import { call, put, takeLatest } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import axios from 'axios';

import { LOGIN_ACTION, LOGIN_SUCCESS, LOGOUT_ACTION } from '../actions/constants';
import type { LoginActionPayload } from '../actions/userActions';
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
    localStorage.setItem('token', data.token);
    yield put({ type: LOGIN_SUCCESS });
  } catch (e) {
    throw e;
  }
}

export function handleLogoutSaga() {
  localStorage.setItem('token', '');
}

export function* userSaga(): Saga<void> {
  yield takeLatest(LOGIN_ACTION, handleLoginSaga);
  yield takeLatest(LOGOUT_ACTION, handleLogoutSaga);
}
