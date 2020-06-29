import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import LoginForm from "../LoginForm/LoginForm";
import SiteLogo from "../../images/logotype-testio-white.png";
import { sendHttpRequest } from "../../utils/fetchApi";

const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0b0f27;
`;

const Logo = styled.img`
  width: 246px;
  height: 64px;
  margin-bottom: 70px;
`;

const Login = ({ setTokenCookie, userHasAuthenticated }) => {
  debugger;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(``);

  const sendData = (body) => {
    setIsLoading(true);
    sendHttpRequest(`https://playground.tesonet.lt/v1/tokens`, body)
      .then((response) => {
        setTokenCookie(response.token);
        userHasAuthenticated(true);
        setIsLoading(false);
      })
      .catch((err) => {
        userHasAuthenticated(false);
        setErrorMessage(err.message);
        setIsLoading(false);
      });
    setErrorMessage(``);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      username: e.target[0].value,
      password: e.target[1].value
    };
    sendData(body);
  };

  return (
    <LoginPage className="login-page">
      <Logo src={SiteLogo} alt="testio" />
      <LoginForm
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </LoginPage>
  );
};

export default Login;

Login.propTypes = {
  setTokenCookie: PropTypes.func.isRequired,
  userHasAuthenticated: PropTypes.func.isRequired
};
