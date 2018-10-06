import 'react-app-polyfill/ie9';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/login/Login'
import Servers from './pages/servers/Servers'
import './App.scss';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/servers" component={Servers} />
            <Redirect to="/login"/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
