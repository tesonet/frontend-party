/* eslint no-process-env: 0 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { appReducer } from '../appReducer';
import { createLogger } from 'redux-logger';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const storeBuilder = () => {
  const middlewares =
    process.env.NODE_ENV === 'production'
      ? [sagaMiddleware]
      : [sagaMiddleware, createLogger()];

  const store = createStore(
    appReducer,
    {},
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
