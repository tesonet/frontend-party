import Dashboard from 'common/scenes/dashboard';
import SignIn from 'common/scenes/sign-in';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

const App: React.SFC = () => (
  <Switch>
    <Route path="/" exact={true} component={Dashboard} />
    <Route path="/sign-in" component={SignIn} />
  </Switch>
);

export default hot(module)(App);
