import React from 'react';
import { Form, Field, FormikTouched, FormikErrors } from 'formik';
import { Credentials } from '../../redux/containers/auth/authReducer';

import './LoginForm.scss';
import { connect } from 'react-redux';
import { AppState } from '../../redux/configureStore';

interface Props {
  touched: FormikTouched<Credentials>;
  errors: FormikErrors<Credentials>;
  isSubmitting: boolean;
}

type StateProps = ReturnType<typeof mapStateToProps>;

const LoginFormComponent: React.FC<Props & StateProps> = ({ touched, errors, isSubmitting, loading, error }) => (
  <Form className="loginForm">
    <div className="loginForm__group">
      <Field
        type="username"
        name="username"
        placeholder="Username"
        className="loginForm__group-input"
      />
      <img className="loginForm__group-icon" src="/static/images/person-icon.svg" />
      <div className="loginForm__error">{touched.username && errors.username || error && 'Failed to log in. Please check your credentials.' || ''}</div>
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
      disabled={isSubmitting || loading}
    >
      {isSubmitting || loading ? 'Logging you in!' : 'Log In'}
    </button>
  </Form>
);

const mapStateToProps = (state: AppState) => ({
  loading: state.auth.loading,
  error: state.auth.error
});

const LoginForm = connect(mapStateToProps)(LoginFormComponent);
export default LoginForm;