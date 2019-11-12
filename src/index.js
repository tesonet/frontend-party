import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Servers from "./pages/Servers";
import Notfound from "./pages/NotFound";

const Routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/servers" component={Servers} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

ReactDOM.render(Routing, document.getElementById("root"));
