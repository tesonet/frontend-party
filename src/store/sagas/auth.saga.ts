import { takeLatest, put, call } from 'redux-saga/effects';
import axiosInstance from '../../api/axiosInstance';
import * as types from '../types/auth.types';

type userObj = {
  username: string;
  password: string;
  type: string;
};

function* fetchToken(action: userObj) {
  let { username, password } = action;
  try {
    let { data } = yield call(() =>
      axiosInstance({
        method: 'post',
        url: '/tokens',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: {
          username,
          password,
        },
      }),
    );

    if (!data.token) throw new Error('Something went wrong');
    localStorage.setItem('token', data.token);
    yield put({ type: types.GET_TOKEN_SUCCESS });
  } catch (error) {
    yield put({ type: types.GET_TOKEN_FAILURE, error });
  }
}
function* tokenWatcher() {
  yield takeLatest(types.GET_TOKEN, fetchToken);
}

export default tokenWatcher;
