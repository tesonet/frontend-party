import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Login = lazy(() => import("./pages/Login/Login"));
const Home = lazy(() => import("./pages/Home/Home"));
const NoMatch = () => "Page not found";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Home} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Suspense>
    </Router>
  );
};
export default App;
