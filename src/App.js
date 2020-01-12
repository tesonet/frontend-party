import React from 'react';
import { Route, Switch } from "react-router-dom"
import { LoginPage } from "./pages";
import * as ROUTES from "./constants/routes";

const App = () => (
  <Switch>
    <Route exact path={ROUTES.LOGIN} component={LoginPage} />
  </Switch>
)

export default App;
