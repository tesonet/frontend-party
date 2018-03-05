import { call, put, takeLatest } from 'redux-saga/effects';
// import { LOCATION_CHANGE } from 'react-router-redux';

import { getAuthToken } from '../../utils/api';
import { LOCAL_STORAGE_AUTH_TOKEN } from '../../constants/localStorage';
import {
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT_REQUESTED,
} from '../../constants/actionTypes';
import {
  authSuccess,
  authError,
} from '../actions/auth';

export function* login({ username, password }) {
  try {
    if (!username || !password) {
      throw new Error('User name and password fields cannot be empty.'); // TODO: move string to copy
    }

    const token = yield call(getAuthToken, username, password);
    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, token);
    yield put(authSuccess(token));
  } catch (error) {
    yield put(authError(error));
  }
}

export function* logout() {
  localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
  yield put(authSuccess());
}

export function* watchLogin() {
  yield takeLatest(AUTH_LOGIN_REQUESTED, login);

  // const loginWatcher =
  // yield cancel(loginWatcher);
}

export function* watchLogout() {
  yield takeLatest(AUTH_LOGOUT_REQUESTED, logout);
}
