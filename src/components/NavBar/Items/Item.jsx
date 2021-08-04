import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="block m-4 md:my-0 md:inline-block"
    type="button"
  >
    {label}
  </button>
);

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Item;
