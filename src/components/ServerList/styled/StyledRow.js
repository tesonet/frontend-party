import React from 'react';
import styled from 'styled-components';
import { Row } from 'reactstrap';

const StyledContainer = styled(Row)`
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.listTextColor};
  height: 3.5rem;

  & .col:last-child {
    text-align: right;
  }
`;

const StyledRow = props => (
  <StyledContainer {...props} />
);

export default StyledRow;
