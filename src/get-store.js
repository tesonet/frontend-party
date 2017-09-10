import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { reducer as auth } from './ducks/auth/reducer';
import { reducer as servers } from './ducks/servers/reducer';

const rootReducer = combineReducers({
  auth,
  servers,
  router: routerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const getStore = (history) => {
  const historyMiddleware = routerMiddleware(history);

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
      historyMiddleware,
      thunk,
    )),
  );
};
