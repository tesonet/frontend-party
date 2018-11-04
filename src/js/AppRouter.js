import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './components/page/LoginPage';
import DashboardPage from './components/page/DashboardPage';
import { IsAuth } from './components/actions/LoginActions'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/dashboard" render={() => (
          !IsAuth()
            ? ( <Redirect to="/"/> )
            : ( <DashboardPage/> )
        )}/>
        <Route render={() => (
          IsAuth()
            ? ( <Redirect to="/dashboard"/> )
            : ( <LoginPage/> )
        )}/>
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;