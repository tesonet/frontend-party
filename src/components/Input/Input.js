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
  height: ${props => props.theme.height.regular};
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
    fill: ${props => props.theme.colour.lightGrey};
    height: 16px;
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
  }
`;

type InputProps = {
  type: string,
  placeholder?: string,
  icon?: ?React.Node,
};

export const Input = ({ icon, ...rest }: InputProps) => (
  <InputWrapper>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <InputStyled {...rest} className="form-control" />
  </InputWrapper>
);

Input.defaultProps = {
  placeholder: '',
  icon: null,
};
