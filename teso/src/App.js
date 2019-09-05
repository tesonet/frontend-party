import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Servers from './servers/serversContainer';
import Login from './login/loginContainer';
import Header from './layout/headerContainer';
import { ProtectedRoute } from './authorization/protectedRoute';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const alertOptions = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

class App extends PureComponent {

  render() {
    return (
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router>
          <Route render={
            ({ location: { pathname } }) => pathname !== '/login' && <Header />
          } />
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Servers} />
          <ProtectedRoute path="/servers" component={Servers} />
        </Router>
      </AlertProvider>
    );
  }
}

export default App;
