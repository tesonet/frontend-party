import allReducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

export default createStore(allReducers, {}, applyMiddleware(logger, promise()));
