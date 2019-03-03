import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { Login } from "components/Login";
import { ServerList } from "components/ServerList";
import { isAuthenticated } from "components/utils";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export const App = () => (
  <Router>
    <Switch>
      <PrivateRoute path="/server-list" component={ServerList} />
      <Route path="/login" component={Login} />
      <Redirect path="*" to="/server-list" />
    </Switch>
  </Router>
);
