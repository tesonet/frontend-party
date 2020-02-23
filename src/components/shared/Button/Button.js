import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, type = 'button', disabled }) => (
  <button type={type} className={styles['button']} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool
};

export default Button;
