import React from 'react';

const Button = ({ onClick, disabled, type, children }) => (
  <button onClick={onClick} disabled={disabled} type={type}>
    {children}
  </button>
);

export default Button;
