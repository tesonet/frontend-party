import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import middleware from './middleware';

const rootReducer = combineReducers({
  [auth.constants.NAME]: auth.reducer,
});

const persistedReducer = persistReducer(
  {
    key: auth.constants.NAME,
    storage,
  },
  rootReducer
);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default {
  store,
  persistor: persistStore(store),
};
