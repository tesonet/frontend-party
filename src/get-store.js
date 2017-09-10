import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import { reducer as auth } from './ducks/auth/reducer';

const rootReducer = combineReducers({
  auth,
  router: routerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const getStore = history => {
  const middleware = routerMiddleware(history);

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(middleware))
  );
}