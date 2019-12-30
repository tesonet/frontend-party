import React from 'react';
import { StyledTableHeader, StyledKey } from './styles';

const TableHeader = () => (
  <StyledTableHeader>
    <StyledKey>Server</StyledKey>
    <StyledKey>Distance</StyledKey>
  </StyledTableHeader>
);

export default TableHeader;
