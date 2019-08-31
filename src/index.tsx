import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from "redux";
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducers from "./reducers/";
import thunk from "redux-thunk";
import './index.scss';

const initialState = {};
const middleware = [thunk];
// @ts-ignore
const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        reduxDevTool
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
