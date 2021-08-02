import React from 'react';

const Item = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="mx-4"
    type="button"
  >
    {label}
  </button>
);

export default Item;
