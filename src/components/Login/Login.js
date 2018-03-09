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
  StyledButton as Button,
} from './styled';
import { login as copy } from '../../assets/copy/global.json';

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
    const { pathname } = this.props.location.state.from || ROUTE_SERVER_LIST;

    if (token) {
      this.props.push(pathname);
    }
  }

  render() {
    const {
      values: {
        username,
        password,
      },
      isLoading,
      error,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      errorDismiss,
    } = this.props;
    const isSubmitDisabled = (
      isSubmitting || isLoading || ((!username || !password) && (touched.username || touched.password))
    );

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
                placeholder={copy.placeholderUsername}
                autoComplete="username"
                type="text"
                value={username}
                valid={!errors.username && !touched.username}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroupAddon><LockIcon className="icon" /></InputGroupAddon>
              <Input
                name="password"
                placeholder={copy.placeholderPassword}
                autoComplete="current-password"
                type="password"
                value={password}
                valid={!errors.password && !touched.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputGroup>
          </FormGroup>

          <Button
            disabled={isSubmitDisabled}
          >
            {copy.loginBtnText}
          </Button>
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
  location: PropTypes.object,
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
