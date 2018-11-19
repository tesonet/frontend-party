import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './style.css';
import LoginPage from './containers/LoginPage/LoginPage';
import LoggedPage from './containers/LoggedPage/LoggedPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>   
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/logged" exact component={LoggedPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
