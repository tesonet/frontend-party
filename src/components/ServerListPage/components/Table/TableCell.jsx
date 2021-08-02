import React from 'react';
import { withChildrenPropTypes, withDefaultChildrenPropTypes } from '@Common';

const TableCell = ({ children }) => (
  <td className="p-2">{children}</td>
);

TableCell.defaultProps = {
  ...withDefaultChildrenPropTypes,
};

TableCell.propTypes = {
  ...withChildrenPropTypes,
};

export default TableCell;
