import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './containers/Login/Login';

const App = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Redirect to="/" />
  </Switch>
);
export default App;
