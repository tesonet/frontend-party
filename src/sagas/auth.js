import { take, call, put, cancel } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { getToken } from '../utils/api';
import {
  LOCAL_STORE_TOKEN_KEY,
} from '../constants/auth';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGOUT_REQUEST,
} from '../actions/types';

import {
  authSuccess,
  authError,
} from '../actions/auth';

export function* loginFlow({ username, password }) {
  try {
    if (!username || !password) {
      throw new Error('Username or password field is missing.');
    }

    const { token } = yield call(getToken, username, password);
    localStorage.setItem(LOCAL_STORE_TOKEN_KEY, token);
    yield put(authSuccess(token));
  } catch (error) {
    yield put(authError(error));
  }
}

export function* logoutFlow() {
  localStorage.removeItem(LOCAL_STORE_TOKEN_KEY);
  yield put(authSuccess());
}

export function* watchLoginFlow() {
  const loginWatcher = yield takeLatest(AUTH_LOGIN_REQUEST, loginFlow);
  yield take(LOCATION_CHANGE);
  yield cancel(loginWatcher);
}

export function* watchLogoutFLow() {
  yield takeLatest(AUTH_LOGOUT_REQUEST, logoutFlow);
}

// All sagas to be loaded
export default [
  watchLoginFlow,
  watchLogoutFLow,
];
