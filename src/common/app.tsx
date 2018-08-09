import Dashboard from 'common/scenes/dashboard';
import SignUp from 'common/scenes/sign-up';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

const App: React.SFC = () => (
  <Switch>
    <Route path="/" exact={true} component={Dashboard} />
    <Route path="/sign-up" component={SignUp} />
  </Switch>
);

export default hot(module)(App);
