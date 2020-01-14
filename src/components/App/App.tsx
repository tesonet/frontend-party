import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps
} from "react-router-dom";
import Login from "../Login/Login";
import Servers from "../Servers/Servers";
import { Provider, useSelector } from "react-redux";
import store, { State } from "../../store/store";

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const token = useSelector(({ user }: State) => (user ? user.token : null));

  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const App: React.FC = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/servers" component={Servers} />
      </Switch>
    </Provider>
  </Router>
);

export default App;
