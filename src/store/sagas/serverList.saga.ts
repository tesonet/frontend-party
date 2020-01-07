import { takeLatest, put, call } from 'redux-saga/effects';
import axiosInstance from '../../api/axiosInstance';
import * as types from '../types/serverList.types';
import { REMOVE_TOKEN } from '../types/auth.types';

function* fetchServerList() {
  try {
    let { data } = yield call(() =>
      axiosInstance('/servers', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Accept: 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }),
    );
    console.log(data);
    if (!data) throw new Error('Something went wrong');
    yield put({
      type: types.GET_SERVER_LIST_SUCCESS,
      serverList: data,
    });
  } catch (error) {
    yield put({ type: types.GET_SERVER_LIST_FAILURE, error });
    yield put({ type: REMOVE_TOKEN });
  }
}
function* serverListSagaWatcher() {
  yield takeLatest(types.GET_SERVER_LIST, fetchServerList);
}

export default serverListSagaWatcher;
