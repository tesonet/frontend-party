import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Application from './application';
import * as serviceWorker from './serviceWorker';
import { Router, Switch, Route } from 'react-router';
import { getHistory } from './routing/history';

function renderAppliction(history: any) {
    ReactDOM.render(
            <Router history={history}>
                <Switch>
                    <Route path="/" component={Application} />
                </Switch>
            </Router>,
        document.getElementById('root')
    );
}

function runApplication() {
    const history = getHistory();
    renderAppliction(history);
}

runApplication();

serviceWorker.unregister();
