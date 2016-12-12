import React, { PropTypes } from 'react';
import './FormMessage.scss';

const FormMessage = ({ children, type }) => (
  <div className={`form-message ${type}`}>
    {children}
  </div>
);

FormMessage.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['error', 'success']),
};

export default FormMessage;
