import React from 'react';

import { withDefaultChildrenPropTypes, withChildrenPropTypes } from '../../../../common';

const TableHeadRow = ({ children }) => (
  <th className="w-1/3 p-2">
    {children}
  </th>
);

TableHeadRow.defaultProps = {
  ...withDefaultChildrenPropTypes,
};

TableHeadRow.propTypes = {
  ...withChildrenPropTypes,
};

export default TableHeadRow;
