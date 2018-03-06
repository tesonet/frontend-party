import React from 'react';
import styled from 'styled-components';
import { Row } from 'reactstrap';

const StyledContainer = styled(Row)`
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.listBorderColor};
  color: ${props => props.theme.listTextColor};
  height: 3.5rem;
  transition: background-color .2s;

  &:hover {
    background-color: ${props => props.theme.bgColorTertiary};
  }

  & .col:last-child {
    text-align: right;
  }
`;

const StyledRow = props => (
  <StyledContainer {...props} />
);

export default StyledRow;
