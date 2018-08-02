import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ROUTE_PATH as serversRoute } from '../../Servers/ServersContainer';
import { doLogin } from '../authActions';
import api from '../../../utils/api';

export const MSG_ERROR_USERNAME_EMPTY = 'Username cannot be empty.';
export const MSG_ERROR_PASSWORD_EMPTY = 'Password cannot be empty.';
export const MSG_ERROR_GLOBAL = 'Something went wrong. Try again later.';

export const ROUTE_PATH = '/login';

export class LoginContainer extends Component {
  state = {
    hasSubmitted: false,
    isBusy: false,
    globalError: null,
    errors: null,
    username: '',
    password: '',
  };

  validate() {
    const errors = {};
    const { username, password } = this.state;

    if (username === '') {
      errors.username = MSG_ERROR_USERNAME_EMPTY;
    }

    if (password === '') {
      errors.password = MSG_ERROR_PASSWORD_EMPTY;
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  onChange = ({ target }) => {
    const errors = this.validate();
    this.setState({ [target.name]: target.value, errors });
  };

  onSubmit = () => {
    const errors = this.validate();
    this.setState({ hasSubmitted: true, errors });

    if (errors !== null) return;

    this.setState({ isBusy: true });

    return api
      .tokens
      .post(this.state.username, this.state.password)
      .then(tokens => {
        this.setState({ isBusy: false });
        api.setToken(tokens.token);
        this.props.doLogin();
        this.props.history.replace(serversRoute);
      })
      .catch(() => {
        this.setState({ isBusy: false, globalError: MSG_ERROR_GLOBAL });
      });
  };

  render() {
    return (
      null
    );
  }
}

export default connect(null, { doLogin })(LoginContainer);
