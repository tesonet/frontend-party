import { all } from 'redux-saga/effects';
import authenticationSagas from 'store/modules/authentication/sagas';
import routerSagas from 'store/modules/router/sagas';
import serversSagas from 'store/modules/servers/sagas';

export default function* rootSaga() {
  yield all([
    ...authenticationSagas,
    ...routerSagas,
    ...serversSagas,
  ]);
}
