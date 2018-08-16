import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginView from './LoginView';
import { doLogin } from '../authActions';
import publicRoute from '../../../hoc/publicRoute';
import api from '../../../utils/api';

export const MSG_ERROR_USERNAME_EMPTY = 'Username cannot be empty.';
export const MSG_ERROR_PASSWORD_EMPTY = 'Password cannot be empty.';
export const MSG_ERROR_UNAUTHORIZED = 'Your username or password is incorrect.';
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

  componentDidMount() {
    this.setState({ errors: this.validate() });
  }

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
    this.setState(
      { [target.name]: target.value },
      () => this.setState({ errors: this.validate() })
    );
  };

  onSubmit = (e) => {
    e.preventDefault();

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
      })
      .catch((e) => {
        let errorMsg;

        if (e.response && e.response.status === 401) {
          errorMsg = MSG_ERROR_UNAUTHORIZED;
        } else {
          errorMsg = MSG_ERROR_GLOBAL;
        }

        this.setState({ isBusy: false, globalError: errorMsg });
      });
  };

  render() {
    return (
      <LoginView
        showErrors={ this.state.hasSubmitted }
        globalError={ this.state.globalError }
        errors={ this.state.errors }
        isDisabled={ !! (this.state.isBusy || this.state.errors) }
        username={ this.state.username }
        password={ this.state.password }
        onSubmit={ this.onSubmit }
        onChange={ this.onChange }
      />
    );
  }
}

export default publicRoute(connect(null, { doLogin })(LoginContainer));
