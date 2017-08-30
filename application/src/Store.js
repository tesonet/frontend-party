import allReducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';


const store = compose(applyMiddleware(logger, promise()))(createStore)(allReducers);


// createStore(allReducers, {}, applyMiddleware(logger, promise()));
// persistStore(store, {storage: localStorage}, onCompletion);

export default store;
