import { all } from 'redux-saga/effects';

import { watchApiFetchServers } from './list/sagas.js';
import { watchApiLogIn, watchLogOut, watchCheckToken } from './auth/sagas.js';

export default function* rootSaga() {
  yield all([watchApiFetchServers(), watchApiLogIn(), watchLogOut(), watchCheckToken()]);
}
