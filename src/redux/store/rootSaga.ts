import { takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, GET_SERVERS_LIST_REQUEST } from '../actionsConst';
import { loginRequested } from '../../components/Login/sagas';
import { getServersListRequested } from '../../components/ServersList/sagas';

export const rootSaga = function*() {
  yield takeLatest(LOGIN_REQUEST, loginRequested);
  yield takeLatest(GET_SERVERS_LIST_REQUEST, getServersListRequested);
};
