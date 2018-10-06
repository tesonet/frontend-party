import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/login/Login'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect to="/login"/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
