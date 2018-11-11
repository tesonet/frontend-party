import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ROUTES } from '../constants';
import ProtectedRoute from './protected-route';
import { Login } from '../../login';
import { ServersList } from '../../servers-list';

const Routes = () => (
    <Switch>
        <Route path={ROUTES.login} component={Login} />
        <ProtectedRoute path={ROUTES.serversList} component={ServersList} />
        <Redirect to={ROUTES.serversList} />
    </Switch>
);

export default Routes;
