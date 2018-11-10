import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../../login/components/page';

const Routes = () => (
    <Switch>
        <Route component={Login} />
    </Switch>
);

export default Routes;
