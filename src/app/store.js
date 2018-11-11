import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

// From documentation: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ /* eslint no-underscore-dangle: 0 */
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) /* eslint no-underscore-dangle: 0 */
    : compose;

export default initialState => createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(
        applyMiddleware(routerMiddleware(history)),
    )
);
