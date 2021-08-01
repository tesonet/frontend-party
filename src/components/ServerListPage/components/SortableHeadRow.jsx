import React from 'react';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { ASCENDING, DESCENDING } from '../config/constatns';

const SortableHeadRow = ({ name, handleSortAction, sortDirection }) => {
  const commonIconProps = {
    className: 'ml-3 inline cursor-pointer',
    onClick: () => handleSortAction(sortDirection),
  };

  const NeutralIcon = <FaSort {...commonIconProps} />;
  const AscendingIcon = <FaSortUp {...commonIconProps} />;
  const DescendingIcon = <FaSortDown {...commonIconProps} />;

  const resolveCurrentIcon = () => {
    if (sortDirection === null) {
      return NeutralIcon;
    }

    return sortDirection === ASCENDING ? AscendingIcon : DescendingIcon;
  };

  return (
    <>
      <span>{name}</span>
      {resolveCurrentIcon()}
    </>
  );
};

SortableHeadRow.propTypes = {
  name: PropTypes.string.isRequired,
  handleSortAction: PropTypes.func.isRequired,
  sortDirection: PropTypes.oneOf([null, ASCENDING, DESCENDING]).isRequired,
};

export default SortableHeadRow;
