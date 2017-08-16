import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { LoginForm } from '../../components/login';
import { LoadingView } from '../../components/ui';
import * as loginActions from '../../reducers/login/actions';
import { LoginScreenStyle } from './style';

class LoginScreen extends Component {
  onLogin(data) {
    const { login } = this.props;
    login(data);
  }

  renderLoading() {
    return (
      <LoadingView />
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

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(loginActions.login, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginScreen));
