import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';

import reducerAuth from './auth/reducer.js';
import reducerList from './list/reducer.js';
import rootSaga from './rootSaga.js';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  reducerAuth,
  reducerList,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    // doesn't work on ie11
    // window.__REDUX_DEVTOOLS_EXTENSION__
    //   ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //   : null,
  ),
);

sagaMiddleware.run(rootSaga);
export default store;
