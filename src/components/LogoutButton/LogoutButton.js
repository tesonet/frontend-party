// @flow

import * as React from 'react';
import styled from 'styled-components';

import { LogoutIcon } from '../Icons/Icons';

const LogoutWrapper = styled.span`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  svg {
    margin: 0 10px 3px 0;
  }
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colour.button};
    svg {
      fill: ${props => props.theme.colour.button};
    }
  }
`;

type LogoutButtonProps = {
  onClick: () => void,
};

export const LogoutButton = ({ onClick }: LogoutButtonProps) => (
  <LogoutWrapper onClick={onClick}>
    <LogoutIcon />
    Logout
  </LogoutWrapper>
);
