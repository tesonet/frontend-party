import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import Servers from './components/servers/ServersPage';
import PageNotFound from './components/PageNotFound';


class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={(this.props.login.token && this.props.login.userAuthenticated) ? Servers : LoginPage} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.LoginReducer
  }
}

export default connect(mapStateToProps)(Routes);
