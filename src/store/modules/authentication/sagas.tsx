import {
  call, fork, put, take,
} from 'redux-saga/effects';
import api from 'api';
import { push } from 'connected-react-router';
import PATHS from 'shared/constants/PATHS';
import { reset as resetAppState } from 'store/rootReducer/actions';
import * as AUTHENTICATION_ACTION_TYPES from 'store/modules/authentication/constants';
import * as helpers from './helpers';
import * as actions from './actions';
import * as notificationActions from '../notification/actions';

export function* authorize() {
  while (true) {
    const { username, password } = yield take(AUTHENTICATION_ACTION_TYPES.INIT);
    yield put(actions.authRequest());
    const { response, error } = yield call(api.user.authorize, username, password);
    if (!error) {
      const { token } = response;
      yield put(actions.initTokenStorage(token));
      yield put(actions.authSuccess());
    } else {
      yield put(actions.authFailure());
    }
  }
}

export function* authorizeSuccess() {
  while (true) {
    yield take(AUTHENTICATION_ACTION_TYPES.AUTH_SUCCESS);
    yield put(push(PATHS.SERVERS));
  }
}

export function* authorizeFailure() {
  while (true) {
    yield take(AUTHENTICATION_ACTION_TYPES.AUTH_FAILURE);
    yield put(notificationActions.setCurrent('Incorrect username or password.'));
  }
}

export function* logout() {
  while (true) {
    yield take(AUTHENTICATION_ACTION_TYPES.INIT_LOGOUT);
    yield call(helpers.resetLocalStorage);
    yield put(resetAppState());
  }
}

export function* setToken() {
  while (true) {
    const { token } = yield take(AUTHENTICATION_ACTION_TYPES.INIT_TOKEN_STORAGE);
    yield call(helpers.setAuthTokenToLocalStorage, token);
    yield put(actions.setToken(token));
  }
}

const authenticationSagas = [
  fork(authorize),
  fork(authorizeSuccess),
  fork(authorizeFailure),
  fork(setToken),
  fork(logout),
];

export default authenticationSagas;
