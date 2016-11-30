import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Redirect from 'react-router/Redirect';
import LoginForm from '../components/LoginForm';
import * as actions from '../actions/authentication';

export class Login extends Component {
  static propTypes = {
    authentication: PropTypes.shape({
      authenticated: PropTypes.bool.isRequired,
      errorMessage: PropTypes.string,
    }),
    signinUser: PropTypes.func.isRequired,
  };

  onFormSubmit = ({ username, password }) => {
    this.props.signinUser({ username, password });
  };

  render() {
    const { authenticated, errorMessage } = this.props.authentication;
    return authenticated
    ? <Redirect to="/" />
    : (
      <LoginForm
        formMessage={errorMessage}
        onSubmit={this.onFormSubmit}
      />
    );
  }
}

export default connect(({ authentication }) =>
  ({ authentication }), actions)(Login);
