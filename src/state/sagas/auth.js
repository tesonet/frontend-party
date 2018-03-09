import { call, put, takeLatest } from 'redux-saga/effects';

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
import getErrorMessage from '../../utils/getErrorMessage';
import { errors as copy } from '../../assets/copy/global.json';

export function* login({ username, password }) {
  try {
    if (!username || !password) {
      throw new Error(copy.errorAuthFieldsEmpty);
    }

    const token = yield call(getAuthToken, username, password);
    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, token);
    yield put(authSuccess(token));
  } catch (error) {
    yield put(authError(getErrorMessage({ error, fallbackMessage: copy.errorAuth })));
  }
}

export function* logout() {
  localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
  yield put(authSuccess());
}

export function* watchLogin() {
  yield takeLatest(AUTH_LOGIN_REQUESTED, login);
}

export function* watchLogout() {
  yield takeLatest(AUTH_LOGOUT_REQUESTED, logout);
}
