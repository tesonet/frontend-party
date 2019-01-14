import { put, takeLatest, all, call } from 'redux-saga/effects';
import request from '../utils/request';
import auth from '../utils/auth';
import { fetchServersSuccess, authorizeSuccess } from '../actions';

function* requestAuth(action) {
try {
    const body = { username: action.payLoad.username, password: action.payLoad.password };
    const requestURL = 'http://playground.tesonet.lt/v1/tokens';

    const response = yield call(request, requestURL, { method: 'POST', body });

        if(response.token){
            yield all([call(auth.setToken, response.token)]);
            yield put(authorizeSuccess());
        }
    }catch (error) {
        console.log(error);
    }
}

function* requestServersList() {
try {
    const requestURL = 'http://playground.tesonet.lt/v1/servers';

    const serversList = yield call(request, requestURL, { method: 'GET'});
    // Ascending order by  distance
    serversList.sort((a,b) => (b.distance > a.distance) ? 1 : ((a.distance > b.distance) ? -1 : 0));
    // Ascending order by name
    serversList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    yield put(fetchServersSuccess(serversList));

    }catch (error) {
        console.log(error);
    }
}

function* actionWatcher() {
  yield takeLatest('AUTH_REQUEST', requestAuth);
  yield takeLatest('FETCH_SERVERS_LIST_BEGIN', requestServersList);
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
