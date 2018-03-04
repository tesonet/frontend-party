import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withFormik } from 'formik';
import Yup from 'yup';
import { Button, Form, FormGroup, Input, FormFeedback, Alert } from 'reactstrap';

import { authLogin, authErrorDismiss } from '../../state/actions/auth';
import { FORM_AUTH } from '../../constants/forms';
import { ROUTE_SERVER_LIST } from '../../constants/routes';

class Login extends Component {
  constructor(props) {
    super(props);

    this.checkAuthToken = this.checkAuthToken.bind(this);
  }

  componentWillMount() {
    this.checkAuthToken(this.props.token);
  }

  componentWillReceiveProps(nextProps) {
    this.checkAuthToken(nextProps.token);
  }

  checkAuthToken(token) {
    if (token) {
      this.props.push(ROUTE_SERVER_LIST);
    }
  }

  render() {
    const {
      isLoading,
      error,
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      errorDismiss,
    } = this.props;
    console.log('LOGIN COMPONENT', error);

    return (
      <div>
        <Alert color="danger" isOpen={!!error} toggle={errorDismiss}>
          {error}
        </Alert>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              name="username"
              placeholder="Username"
              autoComplete="username"
              type="text"
              value={values.username}
              invalid={errors.username && touched.username}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <FormFeedback>{errors.username}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Input
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              type="password"
              value={values.password}
              invalid={errors.password && touched.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <FormFeedback>{errors.password}</FormFeedback>
          </FormGroup>

          <Button disabled={isSubmitting || isLoading}>LOGIN!</Button>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  push: PropTypes.func.isRequired,
  errorDismiss: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func, // TODO: isRequired to form stuff?
};

const mapStateToProps = store => {
  const { auth: { token, isLoading, error } } = store;

  return { token, isLoading, error };
};

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(authLogin(username, password)),
  errorDismiss: () => dispatch(authErrorDismiss()),
  push: path => dispatch(push(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter the username.'),
    password: Yup.string().required('Please enter the password.'),
  }),
  handleSubmit: (values, { setSubmitting, props: { login } }) => {
    login(values.username, values.password);
    setSubmitting(false);
  },
  displayName: FORM_AUTH,
})(Login)); // TODO: TO FORMCONFIG
