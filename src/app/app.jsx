import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';

import PublicPages from 'app/pages/public';
import PrivatePages from 'app/pages/private';

import styles from './app.scss';

const App = () => (
    <div className={ styles['app'] }>
        <Switch>
            <Route path="/public" component={ PublicPages } />
            <Route path="/" component={ PrivatePages } />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default hot(module)(App);
