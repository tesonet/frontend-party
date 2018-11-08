import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../../login-page/components';

const Routes = () => (
    <Switch>
        <Route component={LoginPage} />
    </Switch>
);

export default Routes;
