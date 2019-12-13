import React from "react";

import { Login, Servers } from "../pages";

import { HashRouter, Switch, Route } from "react-router-dom";

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
