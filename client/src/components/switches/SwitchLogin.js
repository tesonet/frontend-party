import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from '../views/Login';

const SwitchLogin = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  )
}

export default SwitchLogin;