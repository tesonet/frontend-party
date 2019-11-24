import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const history = createBrowserHistory();

const connectedRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [
  connectedRouterMiddleware,
  sagaMiddleware,
];

export const configureStore = (state = {}) => createStore(
  rootReducer(history),
  state,
  composeEnhancers(applyMiddleware(...middlewares)),
);

const store = configureStore();
sagaMiddleware.run(rootSaga);

export default store;
