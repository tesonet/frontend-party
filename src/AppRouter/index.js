import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Login, Servers } from '../pages';

function ReactRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/servers" component={Servers} />
      </Switch>
    </HashRouter>
  );
}

export default ReactRouter;
