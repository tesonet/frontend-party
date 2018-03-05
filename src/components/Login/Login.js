import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withFormik } from 'formik';
import {
  Form,
  FormGroup,
} from 'reactstrap';
import PersonIcon from 'react-icons/lib/md/person';
import LockIcon from 'react-icons/lib/md/lock';

import { authLogin, authErrorDismiss } from '../../state/actions/auth';
import { FORM_AUTH_CONFIG } from './constants';
import { ROUTE_SERVER_LIST } from '../../constants/routes';
import {
  LoginContainer,
  StyledAlert as Alert,
  StyledLogo as Logo,
  StyledInput as Input,
  StyledInputGroup as InputGroup,
  StyledInputGroupAddon as InputGroupAddon,
  StyledFormFeedback as FormFeedback,
  StyledButton as Button,
} from './styled';

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

    return (
      <LoginContainer>
        <Alert isOpen={!!error} toggle={errorDismiss}>
          {error}
        </Alert>

        <Logo />

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon><PersonIcon className="icon" /></InputGroupAddon>
              <Input
                name="username"
                placeholder="Username"
                autoComplete="username"
                type="text"
                value={values.username}
                invalid={errors.username && touched.username}
                onBlur={handleBlur}
                onChange={handleChange}
                autoFocus
              />
              <FormFeedback>{errors.username}</FormFeedback>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroupAddon><LockIcon className="icon" /></InputGroupAddon>
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
            </InputGroup>
          </FormGroup>

          <Button disabled={isSubmitting || isLoading}>Log in</Button>
        </Form>
      </LoginContainer>
    );
  }
}

Login.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  errorDismiss: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
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

export default connect(mapStateToProps, mapDispatchToProps)(
  withFormik(FORM_AUTH_CONFIG)(Login)
);
