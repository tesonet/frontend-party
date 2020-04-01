import { call, put } from 'redux-saga/effects';
import { get } from '../../api';
import { getServersListSuccess, getServersListFailure } from './actions';

export function* getServersListRequested() {
  try {
    const response = yield call(get, 'http://playground.tesonet.lt/v1/servers');
    yield put(getServersListSuccess(response));
  } catch (err) {
    yield put(getServersListFailure({ error: err.message }));
  }
}
