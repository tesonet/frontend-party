import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Expander = ({ setIsExpanded, isExpanded }) => (
  <div className="cursor-pointer md:hidden block">
    <AiOutlineMenu
      color="white"
      size={20}
      onClick={() => setIsExpanded(!isExpanded)}
    />
  </div>
);

Expander.propTypes = {
  setIsExpanded: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export default Expander;
