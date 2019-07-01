import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const Root = () => {
  return <h3>Root</h3>;
}
const Public = () => {
  return <h3>Public</h3>;
}
const Servers = () => {
  return <h3>Servers</h3>;
}

const SwitchUser = () => {
  return (
    <Switch>
      <Route path="/" exact component={Root} />
      <Route path="/public" component={Public} />
      <Route path="/servers" component={Servers} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  )
}

export default SwitchUser;