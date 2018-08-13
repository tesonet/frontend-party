import browserHistory from 'common/browserHistory';
import { DeepPartial } from 'common/utils/types';
import { History } from 'history';
import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import createMiddleware from './middleware';
import createReducer from './reducer';
import { IAppState, IAppStore } from './types';

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : <T>(f: T): T => f;

const configureStore = (
  preloadedState?: DeepPartial<IAppState>,
  history: History = browserHistory
): IAppStore<IAppState> => {
  const middleware = createMiddleware(history);
  const reducer = createReducer(history);

  const enhancedCreateStore = compose<typeof createStore>(
    applyMiddleware(...(middleware as Middleware[])),
    devTool
  )(createStore);

  return enhancedCreateStore(reducer, preloadedState as IAppState);
};

export default configureStore;
