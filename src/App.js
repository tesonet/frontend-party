import React from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import { LoginPage, ServersPage } from "./pages";
import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={LoginPage} />
      <Route exact path={ROUTES.HOME} component={ServersPage} />
    </Switch>
  </Router>
);

export default App;
