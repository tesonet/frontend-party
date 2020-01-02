import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import {
  Loader,
  StyledLoaderContainer,
} from '../../../common/loader';
import { login as loginAction } from '../actions';
import iconUsername from '../../../assets/icon-username.svg';
import iconPassword from '../../../assets/icon-password.svg';
import { StyledButton, AuthMessage } from './styles';
import FormField from './formField';
import { validationSchema } from './validationSchema';

const LoginForm = ({
  error,
  login,
  loading,
}) => {
  const errorMessage = error && error.message;
  return (
    <div>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={login}
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
              {loading
                ? (
                  <StyledLoaderContainer>
                    <Loader />
                  </StyledLoaderContainer>
                )
                : 'Log In'}
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
  loading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.login.loading,
  error: state.login.error,
});

const mapDispatchToProps = {
  login: (values) => loginAction(values),
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
