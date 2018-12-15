import React, { Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./utils/history";

import Auth from "./utils/Auth";
import Login from "./pages/Login";
import List from "./pages/List";
import GlobalStyle from "./utils/globalStyles";

import ErrorPage from "./pages/Error";

const App = () => (
  <Auth>
    {({ isAuthenticated, authenticate, logout }) => (
      <Router history={history}>
        <Fragment>
          <GlobalStyle />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Login authenticate={authenticate} />}
            />
            {isAuthenticated ? (
              <Route path="/list" render={() => <List logout={logout} />} />
            ) : null}
            <Route component={ErrorPage} />
          </Switch>
        </Fragment>
      </Router>
    )}
  </Auth>
);

export default App;
