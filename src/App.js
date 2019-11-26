import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./LoginPage/Login";
import Dashboard from "./DashboardPage/Dashboard";
import { PrivateRoute } from "./_components/PrivateRoute";
import { history } from "./_helpers/history";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" />
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default App;
