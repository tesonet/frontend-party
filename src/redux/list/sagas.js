import { call, put, takeLatest } from 'redux-saga/effects';

import { apiFetchServersFailed, apiFetchServersSuccess } from './actions.js';
import { logOut } from '../auth/actions.js';

const URL_DATA_API = 'http://playground.tesonet.lt/v1/servers';

export function* apiFetchServers(action) {
  const errorMessage = 'Failed to fetch data.';
  try {
    const token = localStorage.getItem('tesoToken');
    const settings = {
      method: 'GET',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield call(fetch, URL_DATA_API, settings);

    if (response.ok === true) {
      const res = yield response.json();
      yield put(apiFetchServersSuccess(res));
    } else if (response.status === 401) {
      // log out user if token is invalid
      yield put(logOut());
    } else {
      yield put(apiFetchServersFailed(errorMessage));
    }
  } catch (error) {
    yield put(apiFetchServersFailed(errorMessage));
  }
}

export function* watchApiFetchServers() {
  yield takeLatest('API_FETCH_SERVERS', apiFetchServers);
}
