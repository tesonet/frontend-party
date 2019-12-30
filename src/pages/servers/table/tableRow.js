import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTableRow,
  StyledName,
  StyledDistance,
} from './styles';

const TableRow = ({ rowData, measurement }) => (
  <StyledTableRow>
    <StyledName>{rowData.name}</StyledName>
    <StyledDistance>{rowData.distance} {measurement}</StyledDistance>
  </StyledTableRow>
);

TableRow.defaultProps = {
  rowData: [],
  measurement: '',
};

TableRow.propTypes = {
  rowData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      distance: PropTypes.number,
    }),
  ),
  measurement: PropTypes.string,
};

export default TableRow;
