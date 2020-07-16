import React from "react";

export const Input = ({ value, onChange, placeholder, name, type }) => (
  <div className="input__container">
    <input
      className="input__element"
      name={name ? name : placeholder}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
