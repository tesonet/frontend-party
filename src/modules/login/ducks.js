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
export const { SUBMIT, SAVE_TOKEN, PURGE_TOKEN } = createTypes('LOGIN', [
  'SUBMIT',
  'SAVE_TOKEN',
  'PURGE_TOKEN',
]);

// actions
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

// reducers
const tokenReducer = rereducer(
  null,
  [SAVE_TOKEN, pipe(nthArg(1), prop('token'))],
  [PURGE_TOKEN, always(null)],
);

export const reducer = combineReducers({
  token: tokenReducer,
});

// selectors
export const getFormData = createSelector(
  getFormValues(FORM_ID),
  ifElse(isNil, always({}), identity),
);

const getLogin = path(['login']);
export const getToken = createSelector(getLogin, prop('token'));

// sagas
export function* authenticate() {
  const data = yield select(getFormData);
  const { error, token } = yield call(fetchToken, data);
  if (error) {
    // eslint-disable-next-line no-alert
    alert('Wrong username and/or password');
  } else {
    yield put(saveToken(token));
  }
}

export function* saga() {
  yield takeLatest(SUBMIT, authenticate);
}
