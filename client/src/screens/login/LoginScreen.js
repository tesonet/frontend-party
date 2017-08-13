import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LoginForm } from '../../components/login';
import * as loginActions from '../../reducers/login/actions';
import { LoginScreenStyle } from './style';

class LoginScreen extends Component {
  onLogin(data) {
    const { dispatch } = this.props;
    dispatch(loginActions.login(data));
  }

  renderLoading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  renderContent() {
    return (
      <div className={'login-screen'}>
        <div className={'login-wrapper'}>
          <img
            src={require('../../assets/img/logo-main.png')}
            alt={'tesonet logo'}
            className={'logo'}
          />
          <LoginForm onSubmit={(data) => this.onLogin(data)}/>
        </div>
      </div>
    );
  }

  render() {
    const { isFetching } = this.props;

    return (
      isFetching ? this.renderLoading() : this.renderContent()
    );
  }
}

function mapStateToProps(state, props) {
  const { isFetching, errorMessage, token } = state.login;

  return {
    isFetching,
    errorMessage,
    token
  };
}

export default withRouter(connect(mapStateToProps)(LoginScreen));
