import { call, put, takeEvery } from 'redux-saga/effects';
import { receiveUser, rejectUser } from 'app/redux/actions/userActions';
import request from 'app/utils/ajax';
import { REQUEST_USER, tokensEndpoint } from 'app/utils/constants';

export function* getUser(action) {
  const requestURL = tokensEndpoint;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.credentials),
  };

  try {
    const user = yield call(request, requestURL, options);
    yield put(receiveUser(user));
  } catch (err) {
    yield put(rejectUser(err));
  }
}

export const userSagas = [
  takeEvery(REQUEST_USER, getUser),
];
