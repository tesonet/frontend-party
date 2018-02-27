import {
  always,
  identity,
  ifElse,
  isNil,
  nthArg,
  path,
  pipe,
  prop,
} from 'ramda';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import rereducer from 'rereducer';
import { getFormValues } from 'redux-form';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import createTypes from '../../lib/createTypes';
import { fetchToken } from '../../api';

export const FORM_ID = 'login';

// types
export const {
  CLEAR,
  SUBMIT,
  SAVE_TOKEN,
  PURGE_TOKEN,
  LOGIN_FAILED,
} = createTypes('LOGIN', [
  'CLEAR',
  'SUBMIT',
  'SAVE_TOKEN',
  'PURGE_TOKEN',
  'LOGIN_FAILED',
]);

// actions
export const clear = () => ({
  type: CLEAR,
});

export const submit = () => ({
  type: SUBMIT,
});

export const saveToken = token => ({
  type: SAVE_TOKEN,
  token,
});

export const purgeToken = () => ({
  type: PURGE_TOKEN,
});

export const loginFailed = () => ({
  type: LOGIN_FAILED,
});

// reducers
const tokenReducer = rereducer(
  null,
  [SAVE_TOKEN, pipe(nthArg(1), prop('token'))],
  [PURGE_TOKEN, always(null)],
);

const errorReducer = rereducer(
  false,
  [CLEAR, always(false)],
  [SAVE_TOKEN, always(false)],
  [LOGIN_FAILED, always(true)],
);

export const reducer = combineReducers({
  token: tokenReducer,
  error: errorReducer,
});

// selectors
export const getFormData = createSelector(
  getFormValues(FORM_ID),
  ifElse(isNil, always({}), identity),
);

const getLogin = path(['login']);

export const getError = createSelector(getLogin, prop('error'));

export const getToken = createSelector(getLogin, prop('token'));

// sagas
export function* authenticate() {
  const data = yield select(getFormData);
  const { error, token } = yield call(fetchToken, data);
  if (error) {
    yield put(loginFailed());
  } else {
    yield put(saveToken(token));
  }
}

export function* saga() {
  yield takeLatest(SUBMIT, authenticate);
}
