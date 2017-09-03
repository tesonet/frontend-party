import React from 'react';
import {Route, Switch} from 'react-router';

import {LoginPage, ServersPage} from './components/pages';
import {onlyAuthenticated} from './hoc';


const routes = (
  <Switch>
    <Route exact path='/' component={LoginPage} />
    <Route exact path='/servers' component={onlyAuthenticated(ServersPage)} />
    <Route render={() => <div>404</div>} />
  </Switch>
);

export default routes;
