import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "../Login/Login.js"
import Main from "../Main/Main.js"
import ServerList from "../ServerList/ServerList.js"
import PageNotFound from "../PageNotFound/PageNotFound.js"
import AuthenticatedRoute from "../AuthenticatedRoute/AuthenticatedRoute.js"


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