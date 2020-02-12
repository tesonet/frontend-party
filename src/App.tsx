import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import ServersPage from './ServersPage';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/servers">
            <ServersPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
