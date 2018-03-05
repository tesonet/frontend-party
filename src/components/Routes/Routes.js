import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import App from '../App/App';
import Login from '../Login/Login';
import ServerList from '../ServerList/ServerList';
import PageNotFound from '../PageNotFound/PageNotFound';
import {
  ROUTE_SERVER_LIST,
  ROUTE_LOGIN,
} from '../../constants/routes';

export default () => (
  <App>
    <Switch>
      <PrivateRoute exact path={ROUTE_SERVER_LIST} component={ServerList} />
      <Route path={ROUTE_LOGIN} component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  </App>
);
