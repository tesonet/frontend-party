import React from 'react';

import Page from '../../../shared/Page';
import Input from '../../../shared/forms/Input';
import TestioLogo from '../../../assets/images/logo-light_833x215.png'
import './assets/stylesheets/login.css';

const defaultProps = {
  showErrors: false,
  globalError: null,
  errors: null,
  isDisabled: false,
  username: '',
  password: '',
  onSubmit: () => {},
  onChange: () => {}
};

export default function LoginView(props) {
  return (
    <Page name="auth-login" isInner={ false } title="Log in - Testio.">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-md-4">
          <div className="logo">
            <img src={ TestioLogo } width="246" alt="Testio."/>
          </div>

          <div>
            {
              props.showErrors && props.globalError &&
              <div className="alert alert-danger" role="alert">
                { props.globalError }
              </div>
            }
          </div>

          <form onSubmit={ props.onSubmit }>
            <Input
              type="text"
              error={ props.showErrors && props.errors && props.errors.username }
              name="username"
              value={ props.username }
              onChange={ props.onChange }
              placeholder="Username"
              icon={ <span className="oi oi-person" /> }
            />

            <Input
              type="password"
              error={ props.showErrors && props.errors && props.errors.password }
              name="password"
              value={ props.password }
              onChange={ props.onChange }
              placeholder="Password"
              icon={ <span className="oi oi-lock-locked" /> }
            />

            <button className="btn btn-success w-100" type="submit" disabled={ props.isDisabled }>Log in</button>
          </form>
        </div>
      </div>
    </Page>
  );
}

LoginView.defaultProps = defaultProps;
