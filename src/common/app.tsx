import PrivateRoute from 'common/components/private-route';
import { Routes } from 'common/routes';
import Dashboard from 'common/scenes/dashboard';
import SignIn from 'common/scenes/sign-in';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

const App: React.SFC = () => (
  <Switch>
    <PrivateRoute path={Routes.Home} exact={true} component={Dashboard} />
    <Route path={Routes.SignIn} component={SignIn} />
  </Switch>
);

export default hot(module)(App);
