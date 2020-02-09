import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Login = lazy(() => import("./pages/Login/Login"));
const Servers = lazy(() => import("./pages/Servers/Servers"));
const NoMatch = () => "Page not found";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/servers" component={Servers} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Suspense>
    </Router>
  );
};
export default App;
