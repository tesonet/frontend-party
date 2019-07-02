import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import app from "./Store/app";

const stores = {
    app
}

ReactDOM.render(
    <BrowserRouter>
        <Provider {...stores}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
