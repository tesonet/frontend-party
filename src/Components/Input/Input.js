import React from "react";

export const Input = ({
  value,
  onChange,
  placeholder,
  name,
  type,
  icon,
  error,
}) => (
  <div className="input__container">
    <div
      className="input__icon"
      style={{
        background: `url('${icon}') no-repeat center center / 16px`,
      }}
    />
    <input
      className="input__element"
      name={name ? name : placeholder}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    {error && <div className="input__error">{error}</div>}
  </div>
);
