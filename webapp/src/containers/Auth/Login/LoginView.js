import React from 'react';

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
    <div id="page_auth-login" className="container-fluid h-100">
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
            <div className="form-group with-icon">
              <input
                className={ `form-control ${props.showErrors && props.errors && props.errors.username && 'is-invalid'}` }
                type="text"
                name="username"
                value={ props.username }
                onChange={ props.onChange }
                placeholder="Username"
              />

              <div className="icon">
                <span className="oi oi-person" />
              </div>

              <div className="invalid-feedback">
                { props.showErrors && props.errors && props.errors.username }
              </div>
            </div>

            <div className="form-group with-icon">
              <input
                className={ `form-control ${props.showErrors && props.errors && props.errors.password && 'is-invalid'}` }
                type="password"
                name="password"
                value={ props.password }
                onChange={ props.onChange }
                placeholder="Password"
              />

              <div className="icon">
                <span className="oi oi-lock-locked" />
              </div>

              <div className="invalid-feedback">
                { props.showErrors && props.errors && props.errors.password }
              </div>
            </div>

            <button className="btn btn-success w-100" type="submit" disabled={ props.isDisabled }>Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

LoginView.defaultProps = defaultProps;
