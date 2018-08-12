import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import middleware from './middleware';
import reducer from './reducer';
import { IAppState } from './types';

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : <T>(f: T): T => f;

const configureStore = (preloadedState?: IAppState) => {
  const enhancedCreateStore = compose<typeof createStore>(
    applyMiddleware(...(middleware as Middleware[])),
    devTool
  )(createStore);

  return enhancedCreateStore(reducer, preloadedState as IAppState);
};

export default configureStore;
