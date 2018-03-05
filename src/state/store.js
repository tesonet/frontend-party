import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { watchLogin, watchLogout, watchServerList } from './sagas';

export default function configureStore({ initialState = {}, history }) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
  ];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  // Run sagas
  sagaMiddleware.run(watchLogin);
  sagaMiddleware.run(watchLogout);
  sagaMiddleware.run(watchServerList);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers'); // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
