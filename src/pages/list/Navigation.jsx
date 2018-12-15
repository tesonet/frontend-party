import React from "react";
import PropTypes from "prop-types";

import { Container, Logo, Icon, Button } from "./Navigation.styles";

import IconLogout from "../../assets/icons/ico-logout.svg";
import TesonetBlackLogo from "../../assets/images/black-logo.png";

const Navigation = ({ onClick }) => (
  <Container>
    <Logo alt="testio." src={TesonetBlackLogo} />
    <Button onClick={onClick}>
      <Icon alt="logout-button" src={IconLogout} />
      <span>Logout</span>
    </Button>
  </Container>
);

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Navigation;
