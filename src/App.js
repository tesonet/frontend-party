import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

export const paths = {
  login: "/login",
  home: "/"
};

const App = () => (
  <Router>
    <Switch>
      <Route exact path={paths.login} component={Login} />
      <PrivateRoute exact path={paths.home} component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
export default App;
