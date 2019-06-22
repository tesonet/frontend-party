// @flow
import { combineReducers } from 'redux';
import { configureStore } from 'redux-starter-kit';

import apiMiddleware from './middlewares/api';

import auth from './auth';
import servers from './servers';


const reducer = combineReducers({
    auth,
    servers,
});

const store = configureStore({
    reducer,
    middleware: [apiMiddleware],
    devTools: true,
});

export default store;
