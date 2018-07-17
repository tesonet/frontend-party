import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { IApp } from './types';

// Reducers
import FormReducer from './features/loginForm/reducer';
import TokenReducer from './features/token/reducer';

import createLocalStorageMiddleware from './middlewares/localStorage';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, createLocalStorageMiddleware];

const store = createStore(
    combineReducers<IApp>({
        form: FormReducer,
        token: TokenReducer
    }),
    {} as IApp,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
