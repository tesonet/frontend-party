import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// Reducers
import FormReducer from './features/loginForm/reducer';
// Init Actions

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(
    combineReducers<any>({
        form: FormReducer
    }),
    {},
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
