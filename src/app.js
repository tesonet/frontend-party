import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./common/PrivateRoute";
import jwt_decode from 'jwt-decode'

require('es6-promise').polyfill();


import "./style/default.scss";


if (localStorage.token) {
  setAuthToken(localStorage.token);
} else {
  setAuthToken(false);
}

class App extends Component {
  render() {
    return (
      <Router>
           <Switch>
              <Route exact path="/" component={Login} />
              <PrivateRoute exact path="/main" component={Main} />
          </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById("App"));
