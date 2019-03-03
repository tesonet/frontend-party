import React, { useState } from 'react';
import { IoMdPerson, IoIosLock } from 'react-icons/io';
import PropTypes from 'prop-types';

import { logIn } from '../../redux/auth/actions.js';
import logoImgPath from '../../assets/images/logo.png';
import {
  ErrorTextWrapper,
  ErrorText,
  LoginWrapper,
  LoginOverlay,
  LogoImg,
  LoginButton,
  LoginInputIcon,
  LoginInputText,
  LoginInputWrapper,
  Ie11Fix,
} from './LoginStyledComponents.js';

const Login = (props) => {
  const { dispatch, logInLoading, logInErrorText } = props;
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    // prevent page refresh
    e.preventDefault();
    dispatch(logIn(formState));
  };

  return (
    <Ie11Fix>
      <LoginWrapper>
        <LoginOverlay />
        <div className="container">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
              <LogoImg src={logoImgPath} alt="logo" />
              <form onSubmit={(e) => handleLogin(e)}>
                <LoginInputWrapper>
                  <LoginInputText
                    autoFocus
                    value={formState.username}
                    required
                    autoComplete="off"
                    name="username"
                    onChange={handleChange}
                    disabled={logInLoading}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                  />
                  <LoginInputIcon>
                    <IoMdPerson />
                  </LoginInputIcon>
                </LoginInputWrapper>
                <LoginInputWrapper>
                  <LoginInputText
                    value={formState.password}
                    required
                    name="password"
                    onChange={handleChange}
                    disabled={logInLoading}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Password"
                  />
                  <LoginInputIcon>
                    <IoIosLock />
                  </LoginInputIcon>
                </LoginInputWrapper>

                <LoginButton
                  data-testid="login-button"
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  value={logInLoading ? 'Logging In..' : 'Log In'}
                />

                <ErrorTextWrapper data-testid="login-error">
                  {logInErrorText && <ErrorText>{logInErrorText}</ErrorText>}
                </ErrorTextWrapper>
              </form>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </LoginWrapper>
    </Ie11Fix>
  );
};

export default Login;

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  logInLoading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  logInErrorText: PropTypes.string,
};
