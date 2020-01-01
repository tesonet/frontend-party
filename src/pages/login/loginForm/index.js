import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import {
  loading as loadingAction,
  setError as errorAction,
} from '../actions';
import { getUserToken } from '../../../server/api/tesonetApi';
import iconUsername from '../../../assets/icon-username.svg';
import iconPassword from '../../../assets/icon-password.svg';
import { StyledButton, AuthMessage } from './styles';
import FormField from './formField';
import { validationSchema } from './validationSchema';
import errorMessages from './errorMessages';

const LoginForm = ({ history, serverError, error }) => {
  const errorMessage = error && error.message;

  const handleSubmit = async (values) => {
    const response = await getUserToken(values);
    if (response && response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      history.push('/servers');
    } else if (response && response.status === 401) {
      serverError(errorMessages.WRONG_CREDENTIALS);
    } else {
      serverError(errorMessages.ERROR);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {errorMessage && <AuthMessage>{errorMessage}</AuthMessage>}
            <FormField
              name="username"
              type="username"
              icon={iconUsername}
              placeholder="Username"
            />
            <FormField
              name="password"
              type="password"
              icon={iconPassword}
              placeholder="Password"
            />
            <StyledButton type="submit" disabled={isSubmitting}>
              Log In
            </StyledButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

LoginForm.defaultProps = {
  error: {
    message: '',
  },
};

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  serverError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.login.loading,
  error: state.login.error,
});

const mapDispatchToProps = {
  loading: () => loadingAction(),
  serverError: (message) => errorAction(message),
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
