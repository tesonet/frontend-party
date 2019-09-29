import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "../Login/Login.js"
import Main from "../Main/Main.js"
import ServerList from "../ServerList/ServerList.js"
import PageNotFound from "../PageNotFound/PageNotFound.js"
import RouteAuthentication from "../RouteAuthentication/RouteAuthentication.js"


class App extends Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <RouteAuthentication component={<Main><ServerList /></Main>} />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default hot(module)(App);