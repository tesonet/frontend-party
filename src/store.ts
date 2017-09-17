import epics from './epics';
import reducers from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { createEpicMiddleware } from 'redux-observable';

// for later server side rendering
const windowIfDefined = typeof window === 'undefined' ? null : window as any;
const devTools = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, { }, devTools(
  autoRehydrate(),
  applyMiddleware(
    createEpicMiddleware(epics),
  ),
));

persistStore(store, {
  whitelist: [
    'token',
  ],
});
