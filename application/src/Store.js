import allReducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';

const store = compose(applyMiddleware(promise()))(createStore)(allReducers);


export default store;
