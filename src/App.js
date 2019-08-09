import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/Login/LoginPage/LoginPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Config from "utils/Config";

import "./assets/sass/global";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Add trailing slash */}
          <Route
            exact
            strict
            path="/:url*"
            render={props => <Redirect to={`${props.location.pathname}/`} />}
          />
          <Route exact path={Config.HOME_URL} component={LoginPage} />
          <PrivateRoute
            exact
            path={Config.DASHBOARD_URL}
            component={Dashboard}
          />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
