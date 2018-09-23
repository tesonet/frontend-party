// @flow

import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const reducer = combineReducers({ ...reducers });

export const makeStore = () => {
  const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));
  sagaMiddleware.run(rootSaga);

  return store;
};
