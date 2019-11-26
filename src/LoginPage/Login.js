import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  setUsername,
  setPassword,
  login,
  logout
} from "../_actions/authActions";
import "./Login.scss";

import Logo from "../_assets/testio_logoLogin.png";
import SvgIcon from "../_components/SvgIcon";

const Login = props => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    document.title = "Log In | Testio";
    document.getElementById("spinner").style.cssText = "display:none";
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    props.logout();
  }, []);
  const handleUsernameInput = e => {
    usernameRef.current.parentElement.classList.remove(
      "loginForm__textInputWrapper--error"
    );
    props.setUsername(e.target.value);
  };
  const handlePasswordInput = e => {
    passwordRef.current.parentElement.classList.remove(
      "loginForm__textInputWrapper--error"
    );
    props.setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    usernameRef.current.parentElement.classList.remove(
      "loginForm__textInputWrapper--error"
    );
    passwordRef.current.parentElement.classList.remove(
      "loginForm__textInputWrapper--error"
    );
    if (!props.username) {
      usernameRef.current.focus();
      usernameRef.current.parentElement.classList.add(
        "loginForm__textInputWrapper--error"
      );
    }
    if (!props.password) {
      if (props.username) {
        passwordRef.current.focus();
      }
      passwordRef.current.parentElement.classList.add(
        "loginForm__textInputWrapper--error"
      );
    }
    if (!props.username || !props.password) {
      return;
    }
    props.login({ username: props.username, password: props.password });
  };
  return (
    <div className="loginPage">
      <div className="loginPage-innerWrapper">
        <div className="loginPage__logo">
          <img src={Logo} />
        </div>
        <form className="loginForm">
          <div
            id="username_input_wrapper"
            className="loginForm__textInputWrapper"
          >
            <SvgIcon
              className={"loginForm__textInputWrapper__icon"}
              icon={"USERNAME"}
            />
            <input
              id="username_input"
              className={"loginForm__textInputWrapper__input"}
              ref={usernameRef}
              type="text"
              placeholder="Username"
              value={props.username}
              onChange={handleUsernameInput}
            />
          </div>
          <div className="loginForm__preventMarginCollapse"></div>
          <div
            id="password_input_wrapper"
            className="loginForm__textInputWrapper"
          >
            <SvgIcon
              className={"loginForm__textInputWrapper__icon"}
              icon={"PASSWORD"}
            />
            <input
              id="password_input"
              className={"loginForm__textInputWrapper__input"}
              ref={passwordRef}
              type="password"
              placeholder="Password"
              value={props.password}
              onChange={handlePasswordInput}
            />
          </div>
          {props.authErrorMessage && (
            <div id="error_message" className="loginForm__errorMessage">
              {props.authErrorMessage}
            </div>
          )}

          {props.isLoading ? (
            <button
              ref={buttonRef}
              disabled={props.isLoading}
              className="loginForm__button--loading"
              onClick={handleSubmit}
            >
              <span>Log In</span>
            </button>
          ) : (
            <button
              id="submit_button"
              ref={buttonRef}
              disabled={props.isLoading}
              className="loginForm__button"
              onClick={handleSubmit}
            >
              <span>Log In</span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.authReducer.isLoading,
    username: state.authReducer.username,
    password: state.authReducer.password,
    authErrorMessage: state.authReducer.authErrorMessage
  };
};

export default connect(mapStateToProps, {
  setUsername,
  setPassword,
  login,
  logout
})(Login);
