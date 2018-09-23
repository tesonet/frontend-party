// @flow

import * as React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo-dark.png';
import { LogoutButtonContainer } from '../containers/LogoutContainer/LogoutContainer';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  border-bottom: 1px solid ${props => props.theme.colour.lightestGrey};
  background-color: ${props => props.theme.colour.white};
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
`;

type Props = {
  children: ?React.Node,
};

export const MainLayout = ({ children }: Props) => (
  <div>
    <StyledHeader>
      <Logo src={logo} />
      <LogoutButtonContainer />
    </StyledHeader>
    {children}
  </div>
);
