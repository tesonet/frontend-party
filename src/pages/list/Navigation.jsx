import React from "react";
import styled from "styled-components";

import TesonetBlackLogo from "../../assets/images/logotype-testio.png";
import IconLogout from "../../assets/icons/ico-logout.svg";

const Container = styled.div`
  padding: 0 15px;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
`;

const Button = styled.button`
  background: #fff;
  border: 0;

  hover: {
    border: 1px solid #99cc33;
  }
`;

const Icon = styled.img``;

const Navigation = () => (
  <Container>
    <Logo src={TesonetBlackLogo} />
    <Button>
      <Icon src={IconLogout} />
      Logout
    </Button>
  </Container>
);

export default Navigation;
