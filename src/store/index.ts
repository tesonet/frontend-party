import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import authReducer from './reducers/auth.reducer';
import serverListReducer from './reducers/serverList.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  serverList: serverListReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
