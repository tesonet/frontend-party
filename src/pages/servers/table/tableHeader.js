import React from 'react';
import PropTypes from 'prop-types';
import { StyledTableHeader, StyledKey } from './styles';

const TableHeader = ({ handleSort, handleDirection, direction }) => {
  const setSorting = (value) => {
    handleSort(value);
    handleDirection(direction === 'desc' ? 'asc' : 'desc');
  };

  return (
    <StyledTableHeader>
      <StyledKey onClick={() => setSorting('name')}>Server</StyledKey>
      <StyledKey onClick={() => setSorting('distance')}>Distance</StyledKey>
    </StyledTableHeader>
  );
};

TableHeader.propTypes = {
  handleSort: PropTypes.func.isRequired,
  handleDirection: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
};

export default TableHeader;
