import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Login from "../Login/Login"
import Main from "../Main/Main"
import ServerList from "../ServerList/ServerList"
import PageNotFound from "../PageNotFound/PageNotFound"
import AuthenticatedRoute from "../AuthenticatedRoute/AuthenticatedRoute"


class App extends Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <AuthenticatedRoute exact path="/" component={<Main><ServerList /></Main>} />
            <Route component={PageNotFound} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;