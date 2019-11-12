import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Servers from "./pages/Servers";
import NotFound from "./pages/NotFound";

const Routes = () => {
  const routes = [
    {
      path: "/",
      component: Login
    },
    {
      path: "/servers",
      component: Servers
    }
  ];

  const computedRoutes = routes.map(route => {
    return <Route exact path={route.path} component={route.component} />;
  });

  return (
    <Router>
      <Switch>
        {computedRoutes}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
