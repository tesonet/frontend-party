import { put, takeLatest, all, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import request from '../utils/request';
import auth from '../utils/auth';

function* requestAuth(action) {
try {
    const body = { username: action.payLoad.username, password: action.payLoad.password };
    const requestURL = 'http://playground.tesonet.lt/v1/tokens';

    const response = yield call(request, requestURL, { method: 'POST', body });

        if(response.token){
            yield all([call(auth.setToken, response.token)]);
            yield put(push('/servers'));
        }
    }catch (error) {
        console.log(error);
    }
}

function* actionWatcher() {
  yield takeLatest('AUTH_REQUEST', requestAuth);
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
