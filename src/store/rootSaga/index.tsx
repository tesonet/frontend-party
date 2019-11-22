import { all } from 'redux-saga/effects';
import authenticationSagas from 'store/modules/authentication/sagas';

export default function* rootSaga() {
  yield all([
    ...authenticationSagas,
  ]);
}
