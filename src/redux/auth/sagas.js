import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { logInSuccess, logInError, localTokenFound, localTokenNotFound } from './actions.js';

const URL_API_TOKEN = 'http://playground.tesonet.lt/v1/tokens';

export function* apiLogIn(action) {
  const formData = action.payload;
  const errorMessage = 'Login failed.';
  try {
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    const response = yield call(fetch, URL_API_TOKEN, settings);
    if (response.ok === true) {
      const res = yield response.json();
      const token = res.token;
      localStorage.setItem('tesoToken', token);
      yield put(logInSuccess());
    } else {
      yield put(logInError(errorMessage));
    }
  } catch (error) {
    yield put(logInError(errorMessage));
  }
}
export function* watchApiLogIn() {
  yield takeLatest('LOG_IN', apiLogIn);
}

function* checkToken() {
  const token = localStorage.getItem('tesoToken');
  if (typeof token === 'string' && token !== '') {
    yield put(localTokenFound());
  } else {
    yield put(localTokenNotFound());
  }
}

export function* watchCheckToken() {
  yield takeEvery('CHECK_TOKEN', checkToken);
}

export function* watchLogOut() {
  yield takeEvery('LOG_OUT', () => {
    localStorage.removeItem('tesoToken');
  });
}
