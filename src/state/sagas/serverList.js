import { call, put, takeLatest } from 'redux-saga/effects';

import { getServerList } from '../../utils/api';
import { SERVER_LIST_REQUESTED } from '../../constants/actionTypes';
import {
  serverListReceive,
  serverListError,
} from '../actions/serverList';
import getErrorMessage from '../../utils/getErrorMessage';
import { errors as copy } from '../../assets/copy/global.json';

export function* serverList({ token }) {
  try {
    if (!token) {
      throw new Error(copy.errorUnauthorized);
    }

    const list = yield call(getServerList, token);
    yield put(serverListReceive(list));
  } catch (error) {
    const errorMessage = getErrorMessage({ error, fallbackMessage: copy.errorServerListRetrieve });
    yield put(serverListError(errorMessage));
  }
}

export function* watchServerList() {
  yield takeLatest(SERVER_LIST_REQUESTED, serverList);
}
