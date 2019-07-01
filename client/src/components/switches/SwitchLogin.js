import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Background from '../Background';

const Login = () => {
  return (
    <Background>
      <h3>Login</h3>
    </Background>
  )
}

const SwitchLogin = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  )
}

export default SwitchLogin;