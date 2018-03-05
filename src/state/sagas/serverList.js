import { call, put, takeLatest } from 'redux-saga/effects';
// import { LOCATION_CHANGE } from 'react-router-redux';

import { getServerList } from '../../utils/api';
import { SERVER_LIST_REQUESTED } from '../../constants/actionTypes';
import {
  serverListReceive,
  serverListError,
} from '../actions/serverList';

export function* serverList({ token }) {
  try {
    if (!token) {
      throw new Error('Unauthorized access!'); // TODO: move string to copy
    }

    const list = yield call(getServerList, token);
    yield put(serverListReceive(list));
  } catch (error) {
    yield put(serverListError(error));
  }
}

export function* watchServerList() {
  yield takeLatest(SERVER_LIST_REQUESTED, serverList);
}
