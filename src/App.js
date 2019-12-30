import React from 'react';
import { Switch, Router, Redirect, Route, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './pages/login';
import Servers from './pages/servers';
import { AuthorizedRoute, UnauthorizedRoute } from './pages/routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      <UnauthorizedRoute path="/" exact component={Login} />
      <AuthorizedRoute path="/servers" component={Servers} />
    </Switch>
  </BrowserRouter>
);

export default App;
