import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import App from './components/app/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './utils/localStorage';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    saveState({
        auth: store.getState().auth
    });
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
