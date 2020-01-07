import { all } from 'redux-saga/effects';
import serverListSagaWatcher from './serverList.saga';
import tokenWatcher from './auth.saga';

export default function* rootSaga() {
  yield all([serverListSagaWatcher(), tokenWatcher()]);
}
