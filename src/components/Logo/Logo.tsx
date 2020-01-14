import React from "react";
import logo from "../../assets/logo-login.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  margin: 0 auto;
`;

const Logo: React.FC = () => (
  <LogoContainer>
    <img src={logo} />
  </LogoContainer>
);

export default Logo;
