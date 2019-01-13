import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import Login from '../Login/';
import ServersPage from '../ServersPage';
import '../../data/styles/global.scss';

export default function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div className='container-fluid'>
            <Switch>
              <Route exact path='/' component={Login} />
              <ProtectedRoute exact path='/servers' component={ServersPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
}