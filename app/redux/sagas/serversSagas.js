import { call, put, takeEvery } from 'redux-saga/effects';
import { receiveServers, rejectServers } from 'app/redux/actions/serversActions';
import request from 'app/utils/ajax';
import { REQUEST_SERVERS, localUserToken, serversEndpoint } from 'app/utils/constants';

export function* getServers() {
  const requestURL = serversEndpoint;

  const token = localStorage.getItem(localUserToken);

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    },
  };

  try {
    const servers = yield call(request, requestURL, options);
    yield put(receiveServers(servers));
  } catch (err) {
    yield put(rejectServers(err));
  }
}

export const serversSagas = [
  takeEvery(REQUEST_SERVERS, getServers),
];
