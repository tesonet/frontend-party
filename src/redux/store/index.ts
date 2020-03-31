/* eslint no-process-env: 0 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from '../appReducer';
import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

export const storeBuilder = () => {
  const middlewares =
    process.env.NODE_ENV === 'production'
      ? [sagaMiddleware]
      : [sagaMiddleware, createLogger()];

  return createStore(
    appReducer,
    {},
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
