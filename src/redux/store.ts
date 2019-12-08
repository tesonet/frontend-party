import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { RouterState, connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { AuthState, authReducer } from './containers/auth/authReducer';
import { ServersState, serversReducer } from './containers/servers/serversReducer';

export interface AppState {
  auth: AuthState;
  servers: ServersState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers<AppState>({
    auth: authReducer,
    servers: serversReducer,
    router: connectRouter(history)
  });

export const configureStore = (history: History) => {
  const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}