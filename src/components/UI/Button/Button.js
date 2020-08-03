import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, ...props }) => (
  <button {...props} className="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
