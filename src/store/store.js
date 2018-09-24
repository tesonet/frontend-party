// @flow

import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducers } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const reducer = combineReducers({ ...reducers });
const persistConfig = { key: 'root', whitelist: ['loginReducer'], storage };
const persistedReducer = persistReducer(persistConfig, reducer);

export const makeStore = () => {
  const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));
  sagaMiddleware.run(rootSaga);

  store.__persistor = persistStore(store);
  return store;
};
