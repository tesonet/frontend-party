import React from 'react';
import styled from 'styled-components';
import { InputGroup } from 'reactstrap';

const StyledContainer = styled(InputGroup)`
  background-color: ${props => props.theme.primaryBgColor};
  margin-bottom: 1.5rem;
`;

const StyledInputGroup = props => <StyledContainer {...props} />;

export default StyledInputGroup;
