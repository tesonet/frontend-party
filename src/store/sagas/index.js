import { all, fork } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';

export function* rootSaga() {
  yield all([fork(loginSaga)]);
}
