import React from 'react';
import Login from '../Login/';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../data/styles/global.scss';

export default function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div className='container-fluid'>
            <Switch>
              <Route exact path='/' component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
}
