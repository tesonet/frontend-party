import React from "react";

export const Button = ({ label, onClick }) => (
  <div className="button__container" onClick={onClick}>
    <div className="button__label">{label}</div>
  </div>
);
