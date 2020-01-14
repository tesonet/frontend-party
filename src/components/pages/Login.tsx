import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import logo from "../../assets/logo-testio.svg";
import background from "../../assets/background.png";
import LoginForm from "@components/organisms/loginForm";
import { authedLogin } from "../../actions/loginActions";

const Center = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const StyledBackground = styled(Center)`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 28px;
`;

const StyledWrapper = styled(Center)`
  max-width: 360px;
  flex: 1 1 auto;
  flex-direction: column;
`;

const StyledLogo = styled.img`
  height: 64px;
  width: 246px;
  margin-bottom: 50px;
`;

const Login: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authedLogin(dispatch)(token);
    }
  }, []);
  return (
    <StyledBackground>
      <StyledWrapper>
        <StyledLogo src={logo} alt="logo" />
        <LoginForm />
      </StyledWrapper>
    </StyledBackground>
  );
};

export default Login;
