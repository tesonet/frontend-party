import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";
import background from "../../assets/png/background.png";
import logoLight from "../../assets/png/logo-light.png";

// TODO add overlay which works with IE11
const StyledBackground = styled.div`
  background: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const StyledLoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0 16px;
`;

const StyledLogo = styled.img`
  min-height: 64px;
  min-width: 246px;
  margin-bottom: 69px;
`;

const Login = () => {
  const loggedIn = useSelector(({ auth }) => auth.loggedIn);

  return loggedIn ? (
    <Redirect to="/" />
  ) : (
    <StyledBackground>
      <StyledLoginContainer>
        <StyledLogo src={logoLight} />
        <LoginForm />
      </StyledLoginContainer>
    </StyledBackground>
  );
};

export default Login;
