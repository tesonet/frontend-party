import { createStore, compose, applyMiddleware } from 'redux';
import { RouterState, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AuthState } from './containers/auth/authReducer';
import { ServersState } from './containers/servers/serversReducer';
import { createRootReducer, history } from './rootReducer';

export interface AppState {
  auth: AuthState;
  servers: ServersState;
  router: RouterState;
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

export const configureStore = () => {
  const store = createStore(
    persistedReducer,
    compose(applyMiddleware(routerMiddleware(history)))
  );

  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept('./rootReducer'), () => {
      const nextRootReducer = require('./rootReducer').createRootReducer();
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    };
  }

  return { store, persistor, history };
}