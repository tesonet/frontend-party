import React from 'react';
import { Helmet } from 'react-helmet';
import { loginForm } from 'app/forms/loginForm';
import { generateFormValues } from 'app/utils/helpers';
import logoLight from 'app/assets/images/logo-light.png';
import './LoginPage.scss';
import Form from 'app/components/Form/Form';

export default class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      [loginForm.name]: generateFormValues(loginForm.fields),
    };

    this._handleFormUpdate = this._handleFormUpdate.bind(this);
    this._submitLoginForm = this._submitLoginForm.bind(this);
  }

  _handleFormUpdate(formName, formField, formValue) {
    const newValues = {
      ...this.state[formName],
      [formField]: formValue,
    };

    this.setState({ [formName]: newValues });
  }

  _submitLoginForm() {
    this.props.requestUser(this.state[loginForm.name]);
  }

  render() {
    const { user } = this.props;

    const buttonLabel = user.loading? 'Authenticating...': 'Log in';

    return (
      <article>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <div className="login-page">
          <div className="container">
            <div className="col-sm-6 offset-sm-3 col-lg-4 offset-lg-4">
              <img className="login-page__logo pb-5" src={logoLight} alt="logo-light"/>
              <Form
                structure={loginForm}
                values={this.state[loginForm.name]}
                onUpdate={this._handleFormUpdate}
                onSubmit={this._submitLoginForm}
                disabled={user.loading}
                error={user.rejected}
                inputClass="form-control-lg"
              />
              <button
                type="button"
                className="login-page__button btn btn-lg btn-block my-2"
                onClick={this._submitLoginForm}
                disabled={user.loading}
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
