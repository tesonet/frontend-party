import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.scss';
import LoginWindow from './Login/loginWindow';
import Servers from './Servers/Servers';
import PrivateRoute from './Auth/PriveteRoute';


class App extends Component {

  render() {
    return (<div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginWindow}/>
          <PrivateRoute exact path="/servers" component={Servers}/>
        </Switch>
      </Router>
    </div>);
  }
}

export default App;
