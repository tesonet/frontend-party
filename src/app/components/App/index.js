import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import auth from '../../../auth';
import servers from '../../../servers';
import { MainRouter, Header } from '../';

export class App extends Component {
  logoutFunc = () => {
    this.props.onLogoutRequest();
    this.props.clearServers();
  };

  render() {
    return (
      <div>
        {sessionStorage.getItem('token') && (
          <Header logoutFunc={this.logoutFunc} />
        )}
        <MainRouter />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isLogged: state.AUTH.isLogged
});

const mapActionsToProps = {
  onLogoutRequest: auth.actions.logUserOut,
  clearServers: servers.actions.clearServers
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionsToProps
  )(App)
);
