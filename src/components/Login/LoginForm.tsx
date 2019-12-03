import React from 'react';
import { Form, Field, FormikTouched, FormikErrors } from 'formik';
import { Credentials } from './Login';

import './LoginForm.scss';

interface Props {
  touched: FormikTouched<Credentials>;
  errors: FormikErrors<Credentials>;
  isSubmitting: boolean;
}

const LoginForm: React.FC<Props> = ({ touched, errors, isSubmitting }) => (
  <Form className="loginForm">
    <div className="loginForm__group">
      <Field
        type="username"
        name="username"
        placeholder="Username"
        className="loginForm__group-input"
      />
      <img className="loginForm__group-icon" src="/static/images/person-icon.svg" />
      <div className="loginForm__error">{touched.username && errors.username || ''}</div>
    </div>

    <div className="loginForm__group">
      <Field
        type="password"
        name="password"
        placeholder="Password"
        className="loginForm__group-input"
      />
      <img className="loginForm__group-icon" src="/static/images/lock-icon.svg" />
      <div className="loginForm__error">{touched.password && errors.password || ''}</div>
    </div>

    <button
      type="submit"
      name="submit"
      className="loginForm__button"
    >
      Log In
    </button>
  </Form>
);

export default LoginForm;