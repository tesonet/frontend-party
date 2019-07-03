import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Servers from '../views/Servers';
import Home from '../views/Home';

const SwitchUser = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/servers" component={Servers} />
      <Route render={() => <Redirect to="/servers" />} />
    </Switch>
  )
}

export default SwitchUser;