import React from 'react';
import { Route, Switch } from 'react-router';
import { Redirect } from '../../lib/components';
import asyncComponent from '../../lib/asyncComponent';

// asynchronously load pages
const Login = asyncComponent(() =>
  import(/* webpackChunkName: "login" */ '../login'),
);
const Servers = asyncComponent(() =>
  import(/* webpackChunkName: "servers" */ '../servers'),
);
const NotFound = asyncComponent(() =>
  import(/* webpackChunkName: "not-found" */ '../not-found'),
);

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/servers" />} />
    <Route path="/login" component={Login} />
    <Route path="/servers" component={Servers} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
