import { once } from 'ramda';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import saga from './sagas';

// basic logger middleware
const loggerMiddleware = () => next => action => {
  // eslint-disable-next-line
  console.log('ACTION', '▶', action.type);
  return next(action);
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default once(history => {
  const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
      applyMiddleware(
        loggerMiddleware,
        sagaMiddleware,
        routerMiddleware(history),
      ),
    ),
  );

  sagaMiddleware.run(saga);

  return { store, persistor: persistStore(store) };
});
