import {
  fork, put, take, call,
} from 'redux-saga/effects';
import api from 'api';
import * as SERVERS_ACTIONS_TYPES from './constants';
import * as actions from './actions';

function* getAll() {
  while (true) {
    yield take(SERVERS_ACTIONS_TYPES.GET_ALL);
    yield put(actions.getAllRequest());
    const { response, error } = yield call(api.servers.get);

    if (!error) {
      yield put(actions.setAll(response));
      yield put(actions.getAllSuccess());
    } else {
      yield put(actions.getAllFailure());
    }
  }
}

const authenticationSagas = [
  fork(getAll),
];

export default authenticationSagas;
