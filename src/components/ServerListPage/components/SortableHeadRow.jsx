import React from 'react';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { ASCENDING, DESCENDING } from '../config/constants';
import { TableHeadRow } from './Table';

const SortableHeadRow = ({ name, handleSortAction, sortDirection }) => {
  const commonIconProps = {
    className: 'ml-3 inline cursor-pointer',
    onClick: handleSortAction,
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
    <TableHeadRow>
      <span>{name}</span>
      {resolveCurrentIcon()}
    </TableHeadRow>
  );
};

SortableHeadRow.defaultProps = {
  sortDirection: null,
};

SortableHeadRow.propTypes = {
  name: PropTypes.string.isRequired,
  handleSortAction: PropTypes.func.isRequired,
  sortDirection: PropTypes.oneOf([ASCENDING, DESCENDING]),
};

export default SortableHeadRow;
