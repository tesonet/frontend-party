import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTableRow,
} from './styles';

const TableRow = ({ rowData, measurement }) => (
  <StyledTableRow>
    <div>{rowData.name}</div>
    <div>{rowData.distance} {measurement}</div>
  </StyledTableRow>
);

TableRow.defaultProps = {
  rowData: [],
  measurement: '',
};

TableRow.propTypes = {
  rowData: PropTypes.shape({
    name: PropTypes.string,
    distance: PropTypes.number,
  }),
  measurement: PropTypes.string,
};

export default TableRow;
