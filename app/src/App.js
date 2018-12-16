import React, { Component } from 'react';
import Login from './components/Login';
import ServerItems from './components/ServerItems';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import './sass/base.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div className='container-fluid'>
            <Switch>
              <Route exact path='/' component={Login} />
              <ProtectedRoute exact path='/servers' component={ServerItems} />
              <Route path='*' component={() => 'Nothing here'} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
