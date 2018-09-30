import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect,
} from 'react-router-dom';

import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import PageNotFound from './features/page-not-found/PageNotFound';
import Login from './features/login/Login';
import Servers from './features/servers/Servers';

import style from './App.scss';
import { isAuthToken } from './api/auth-token';

const App = () => (
  <BrowserRouter>
    <div className={style.app}>
      <Switch>
        <Route path="/" exact render={() => (isAuthToken() ? (<Redirect to="/servers" />) : (<Login />))} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/servers" component={Servers} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

if (module.hot) {
  module.hot.accept();
}

export default App;
