import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducers from "./reducers/";
import thunk from "redux-thunk";
import './index.scss';

// IE11 support polyfills
import 'react-app-polyfill/ie11';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);