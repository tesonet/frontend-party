import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {IServersState} from './reducers/serversReducer';

export interface IReduxState {
	isLoading: boolean;
	servers: IServersState;
}

const composeEnhancers = composeWithDevTools({}) as typeof compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk)),
);

export default store;