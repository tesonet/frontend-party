import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import servers from './servers';
import middleware from './middleware';

const persistedAuthReducer = persistReducer(
  {
    key: auth.constants.NAME,
    storage,
  },
  auth.reducer
);

const rootReducer = combineReducers({
  [auth.constants.NAME]: persistedAuthReducer,
  [servers.constants.NAME]: servers.reducer,
});

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
);

export default {
  store,
  persistor: persistStore(store),
};
