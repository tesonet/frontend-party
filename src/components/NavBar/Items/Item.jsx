import React from 'react';

const Item = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="block m-4 md:my-0 md:inline-block"
    type="button"
  >
    {label}
  </button>
);

export default Item;
