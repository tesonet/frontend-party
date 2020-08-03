import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import auth from './login/login.reducer';
import servers from './servers/servers.reducer';

const rootReducer = combineReducers({
  auth,
  servers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
