/**
 * Server list page sagas
 */

import { take, call, put, cancel } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SERVER_LIST_FETCH } from './constants';
import { serverListReceived, serverListError } from './actions';
import { getServerList } from '../../api';

export function* serverListFlow({ token }) {
  try {
    const list = yield call(getServerList, token);
    yield put(serverListReceived(list));
  } catch (error) {
    yield put(serverListError(error));
  }
}

function* watchServerListFlow() {
  const logoutWatcher = yield takeLatest(SERVER_LIST_FETCH, serverListFlow);
  yield take(LOCATION_CHANGE);
  yield cancel(logoutWatcher);
}

// All sagas to be loaded
export default [
  watchServerListFlow,
];
