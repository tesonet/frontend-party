import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from './auth';
import middleware from './middleware';

const rootReducer = combineReducers({
  [auth.constants.NAME]: auth.reducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
