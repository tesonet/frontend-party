import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './private-route';
import Login from '../../login/components/page';
import ServersList from '../../servers-list/components/page';

import withAuth from '../enhancers/withAuth';

const ProtectedRoute = withAuth(PrivateRoute);

const Routes = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/servers-list" component={ServersList} />
        <Redirect to="/servers-list" />
    </Switch>
);

export default Routes;
