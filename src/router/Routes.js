import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home/Home';
import PATHS from 'shared/constants/PATHS';
import Servers from 'pages/Servers/Servers';
import requireAuth from './hocs/requireAuth';

const Routes = () => (
  <Switch>
    <Route exact path={PATHS.HOME} component={Home} />
    <Route exact path={PATHS.SERVERS} component={requireAuth(Servers)} />
    <Redirect to={PATHS.HOME} />
  </Switch>
);

export default Routes;
