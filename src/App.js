import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';

const App = () => {
  const token = useSelector(state => state.auth.token);

  let routes = (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Redirect to="/home" />
    </Switch>
  );

  if (!token) {
    console.log(!token);
    routes = (
      <Switch>
        <Route path="/" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return routes;
};
export default App;
