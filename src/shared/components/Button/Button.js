import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({
  title, loading, onClick, ...rest
}) => (
  <StyledButton disabled={loading} onClick={onClick} {...rest}>
    {loading ? 'Loading...' : title}
  </StyledButton>
);

Button.defaultProps = {
  loading: false,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
