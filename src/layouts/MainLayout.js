// @flow

import * as React from 'react';
import styled from 'styled-components';

import { LogoutIcon } from '../components/Icons/Icons';
import logo from '../assets/logo-dark.png';

const StyledHeader = styled.header`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  border-bottom: 1px solid ${props => props.theme.colour.lightestGrey};
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
`;

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

type Props = {
  children: ?React.Node,
};

export const MainLayout = ({ children }: Props) => (
  <div>
    <StyledHeader>
      <Logo src={logo} />
      <LogoutWrapper>
        <LogoutIcon />
        Logout
      </LogoutWrapper>
    </StyledHeader>
    {children}
  </div>
);
