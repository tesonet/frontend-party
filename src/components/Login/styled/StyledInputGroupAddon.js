import React from 'react';
import styled from 'styled-components';
import { InputGroupAddon } from 'reactstrap';

const StyledContainer = styled(InputGroupAddon)`
  background-color: ${props => props.theme.bgColorPrimary};
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  padding-left: 1.5rem;
  padding-right: 0;

  & > .icon {
    fill: ${props => props.theme.inputTextColorPrimary};
    height: 3rem;
  }
`;

const StyledInputGroupAddon = props => <StyledContainer addonType="prepend" {...props} />;

export default StyledInputGroupAddon;
