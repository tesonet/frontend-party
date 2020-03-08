import {createStore} from 'redux';
import {rootReducer} from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createBrowserHistory} from 'history';

export const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export const routerHistory = createBrowserHistory();
