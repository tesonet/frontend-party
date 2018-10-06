import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import thunkMiddleware from 'redux-thunk';

import reducers from 'app/reducers';

const persistConfig = {
    key: 'app',
    storage,
    whitelist: ['session'],
};

const initialState = {};
const persistedReducer = persistReducer(persistConfig, reducers);
const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);
const mainMiddleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    historyMiddleware
));

const store = createStore(
    connectRouter(history)(persistedReducer),
    initialState,
    mainMiddleware
);
const persistor = persistStore(store);

export {
    store,
    persistor,
    history,
};
