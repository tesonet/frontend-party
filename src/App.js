import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/login';
import Servers from './pages/servers';
import { AuthorizedRoute, UnauthorizedRoute } from './pages/routes';

const App = () =>
  <BrowserRouter>
    <Switch>
      <UnauthorizedRoute path="/" exact component={Login} />
      <AuthorizedRoute path="/servers" exact component={Servers} />
    </Switch>
  </BrowserRouter>;
export default App;
