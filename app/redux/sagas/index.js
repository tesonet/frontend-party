import { all } from 'redux-saga/effects';

import { userSagas } from './userSagas';
import { serversSagas } from './serversSagas';

export default function* rootSaga() {
  yield all([
    ...userSagas,
    ...serversSagas
  ])
}
