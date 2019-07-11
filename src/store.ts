import { applyMiddleware, compose, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import { loadTokenFromStorage } from './utils/sync';
import rootReducer from './root.reducer';

const initialState = loadTokenFromStorage();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [promise];

export default createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));
