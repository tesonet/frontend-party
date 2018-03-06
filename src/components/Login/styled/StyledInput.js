import React from 'react';
import styled from 'styled-components';
import { Input } from 'reactstrap';

const StyledContainer = styled(Input)`
  background-color: ${props => props.theme.bgColorPrimary};
  box-shadow: none;
  border: 0;
  border-bottom-right-radius: 5px !important;
  border-top-right-radius: 5px !important;
  color: ${props => props.theme.inputTextColorPrimary};
  height: 3rem;
  outline: none;
  transition: none;

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.inputTextColorActive};
    box-shadow: none;
    outline: none;
  }

  &.is-invalid:focus,
  &.is-valid:focus {
    box-shadow: none;
  }

  ::-webkit-input-placeholder {
    color: ${props => props.theme.inputTextColorPrimary};
  }
  ::-moz-placeholder {
    color: ${props => props.theme.inputTextColorPrimary};
  }
  :-ms-input-placeholder {
    color: ${props => props.theme.inputTextColorPrimary};
  }
  :-moz-placeholder {
    color: ${props => props.theme.inputTextColorPrimary};
  }
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
    -webkit-text-fill-color: ${props => props.theme.inputTextColorPrimary} !important;
  }
`;

const StyledInput = props => <StyledContainer {...props} />;

export default StyledInput;
