import { fork, put, take } from 'redux-saga/effects';
import * as ROUTER_ACTION_TYPES from '../router/constants';
import * as actions from './actions';

function* watchRouteChange() {
  while (true) {
    yield take(ROUTER_ACTION_TYPES.LOCATION_CHANGE);
    yield put(actions.clearCurrent());
  }
}

const notificationSagas = [
  fork(watchRouteChange),
];

export default notificationSagas;
