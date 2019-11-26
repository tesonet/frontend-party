import { fork, put, take } from 'redux-saga/effects';
import * as ROUTER_ACTION_TYPES from './constants';
import * as notificationActions from '../notification/actions';

function* locationChange() {
  while (true) {
    yield take(ROUTER_ACTION_TYPES.LOCATION_CHANGE);
    yield put(notificationActions.clearMessage());
  }
}

const notificationSagas = [
  fork(locationChange),
];

export default notificationSagas;
