import React from 'react';
import { connect } from 'react-redux';
import { StyledTableHeader, StyledKey } from './styles';
import { sortList } from '../actions';

const handleClick = (sort) => sortList(sort);

const TableHeader = () => (
  <StyledTableHeader>
    <StyledKey onClick={sortList('name')}>Server</StyledKey>
    <StyledKey onClick={sortList('distance')}>Distance</StyledKey>
  </StyledTableHeader>
);

export default connect()(TableHeader);
