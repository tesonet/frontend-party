import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;