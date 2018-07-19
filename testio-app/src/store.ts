import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { IApp } from './types';

// Reducers
import FormReducer from './features/loginForm/reducer';
import ListReducer from './features/serverList/reducer';
import TokenReducer from './features/token/reducer';

import createLocalStorageMiddleware from './middlewares/localStorage';

export const history = createBrowserHistory()
const composeEnhancers: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk, createLocalStorageMiddleware, routerMiddleware(history)];

const store = createStore(
    connectRouter(history)(combineReducers<IApp>({
        form: FormReducer,
        list: ListReducer,
        token: TokenReducer
    })),
    {} as IApp,
    composeEnhancers(applyMiddleware(...middleware))
)
export default store;
