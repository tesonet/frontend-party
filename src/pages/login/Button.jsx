import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Button } from "reactstrap";

const ButtonWithStyles = styled(Button)`
  background-color: ${({ color }) => color || "#fff"};
  color: #fff;
  font-family: Roboto;
  font-weight: 800;
  font-size: 16px;
  height: 56px;

  :hover {
    background-color: #86b300;
  }
`;

const StyledButton = ({ className, color, text }) => (
  <ButtonWithStyles className={className} color={color}>
    {text}
  </ButtonWithStyles>
);

StyledButton.propTypes = {
  className: PropTypes.func,
  color: PropTypes.string,
  text: PropTypes.string
};
export default StyledButton;
