import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { PATH_BY_ID } from '../constants';
import ProtectedRoute from './protected-route';
import Login from '../../login/components/page';
import ServersList from '../../servers-list/components/page';

const Routes = () => (
    <Switch>
        <Route path={PATH_BY_ID.LOGIN} component={Login} />
        <ProtectedRoute path={PATH_BY_ID.SERVERS_LIST} component={ServersList} />
        <Redirect to={PATH_BY_ID.SERVERS_LIST} />
    </Switch>
);

export default Routes;
