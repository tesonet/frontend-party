import Error from 'common/components/error/component';
import PrivateRoute from 'common/components/private-route';
import { withErrorBoundary } from 'common/hocs/withErrorBoundary';
import { Routes } from 'common/routes';
import Dashboard from 'common/scenes/dashboard';
import NotFound from 'common/scenes/not-found';
import SignIn from 'common/scenes/sign-in';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

const App: React.SFC = () => (
  <Switch>
    <PrivateRoute path={Routes.Home} exact={true} component={Dashboard} />
    <Route path={Routes.SignIn} component={SignIn} />
    <Route component={NotFound} />
  </Switch>
);

export default hot(module)(withErrorBoundary(Error)(App));
