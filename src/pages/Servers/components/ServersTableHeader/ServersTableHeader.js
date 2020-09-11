import React from 'react';
import { StyledContainer, StyledColumn } from './ServersTableHeader.styles';

const ServersTableHeader = () => {
  return (
    <StyledContainer>
      <StyledColumn>SERVER</StyledColumn>
      <StyledColumn>DISTANCE</StyledColumn>
    </StyledContainer>
  )
}

export default ServersTableHeader;