import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './HOC/ProtectedRoute';

import history from './_helpers';
import store from './redux/store';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import './index.less';

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/login" component={Login} />
                <ProtectedRoute path="/" component={Dashboard} />
            </Switch>
        </Router>
    </Provider>
);

render(
    <Root />,
    document.getElementById('root')
);
