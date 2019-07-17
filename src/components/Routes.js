import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Login from "./login";
import ServerList from "./server-list";
import NotFound from "./not-found";

const Routes = () => (
  <HashRouter basename="/">
    <div>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/server-list" exact component={PrivateRoute(ServerList)} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </HashRouter>
);

export default Routes;
