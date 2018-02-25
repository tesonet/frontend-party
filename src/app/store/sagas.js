import { map } from 'ramda';
import { all, fork } from 'redux-saga/effects';
import { saga as loginSaga } from '../../modules/login';

const sagas = [loginSaga];

const forkAllModuleSagas = map(fork);

export default function* saga() {
  yield all(forkAllModuleSagas(sagas));
}
