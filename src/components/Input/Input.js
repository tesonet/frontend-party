// @flow

import * as React from 'react';
import styled from 'styled-components';

import { breakpoints } from '../../theme/media';

const InputWrapper = styled.div`
  position: relative;
`;

const InputStyled = styled.input`
  margin: 10px 0;
  width: ${props => props.theme.width.formElementRegular};
  height: ${props => props.theme.height.formElementRegular};
  padding-left: 50px;
  color: ${props => props.theme.colour.grey};

  @media (max-width: ${breakpoints.sm}) {
    width: ${props => props.theme.width.formElementSmall};
  }

  ::placeholder {
    color: ${props => props.theme.colour.grey};
  }

  &:focus {
    color: ${props => props.theme.colour.grey};
  }
`;

const IconWrapper = styled.div`
  svg {
    fill: ${props => props.theme.colour.grey};
    height: 16px;
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
  }
`;

type Props = {
  inputType: string,
  inputPlaceholder?: string,
  icon?: ?React.Node,
};

export const Input = ({ inputType, inputPlaceholder, icon }: Props) => (
  <InputWrapper>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <InputStyled type={inputType} placeholder={inputPlaceholder} className="form-control" />
  </InputWrapper>
);

Input.defaultProps = {
  inputPlaceholder: '',
  icon: null,
};
