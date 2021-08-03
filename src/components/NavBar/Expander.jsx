import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Expander = ({ setIsExpanded, isExpanded }) => (
  <div className="cursor-pointer md:hidden block">
    <AiOutlineMenu
      color="white"
      size={20}
      onClick={() => setIsExpanded(!isExpanded)}
    />
  </div>
);

export default Expander;
