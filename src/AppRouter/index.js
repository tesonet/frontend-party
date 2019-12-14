import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';

import { Login, Servers } from '../pages';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

function ReactRouter() {
  return (
    <HashRouter>
      <Switch>
        <PublicRoute path="/" exact component={Login} />
        <PrivateRoute path="/servers" component={Servers} />
      </Switch>
    </HashRouter>
  );
}

export default ReactRouter;
