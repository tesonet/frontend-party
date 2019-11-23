import { all } from 'redux-saga/effects';
import authenticationSagas from 'store/modules/authentication/sagas';
import notificationSagas from 'store/modules/notification/sagas';

export default function* rootSaga() {
  yield all([
    ...authenticationSagas,
    ...notificationSagas,
  ]);
}
