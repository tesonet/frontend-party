import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./Button.styles";

const Button = ({ className, type, color, text }) => (
  <StyledButton type={type} className={className} color={color}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Button;
