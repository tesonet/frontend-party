import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './reducers';
import axios from 'axios';

const client = axios.create({
    baseURL: 'http://playground.tesonet.lt/v1',
    responseType: 'json'
});

const axiosMiddlewareOptions = {
    interceptors: {
        request: [
            (getState, config) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`
                }

                return config
            }
        ]
    }
};

const store = createStore(
    reducer,
    applyMiddleware(axiosMiddleware(client, axiosMiddlewareOptions)),
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
