import React from 'react';
import PropTypes from 'prop-types';

import SortableHeadRow from './SortableHeadRow';
import { NAME, DISTANCE } from '../../config/constants';
import { sortConfigDefaultProps, sortConfigPropTypes } from '../../propTypes';

const TableHead = ({ handleSortAction, sortConfig }) => (
  <thead>
    <tr className="text-gray-300 bg-tesonet-purple-900 font-bold">
      <SortableHeadRow
        name="Servers"
        handleSortAction={() => handleSortAction([NAME])}
        sortDirection={sortConfig[NAME]}
      />
      <SortableHeadRow
        name="Distance"
        handleSortAction={() => handleSortAction([DISTANCE])}
        sortDirection={sortConfig[DISTANCE]}
      />
    </tr>
  </thead>
);

TableHead.defaultProps = {
  sortConfig: sortConfigDefaultProps,
};

TableHead.propTypes = {
  handleSortAction: PropTypes.func.isRequired,
  sortConfig: sortConfigPropTypes,
};

export default TableHead;
