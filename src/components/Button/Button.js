// @flow

import * as React from 'react';
import styled from 'styled-components';

import { breakpoints } from '../../theme/media';

const ButtonStyled = styled.button`
  font-size: ${props => props.theme.fontSize.larger};
  width: ${props => props.theme.width.formElementRegular};
  background-color: ${props => props.theme.colour.button};
  height: ${props => props.theme.height.formElementRegular};
  color: ${props => props.theme.colour.white};
  font-weight: bold;
  margin: 10px 0;

  @media (max-width: ${breakpoints.sm}) {
    width: ${props => props.theme.width.formElementSmall};
  }

  &:hover {
    background-color: ${props => props.theme.colour.buttonHover};
  }
`;

type Props = {
  text: string,
};

export const Button = ({ text }: Props) => <ButtonStyled className="btn">{text}</ButtonStyled>;
