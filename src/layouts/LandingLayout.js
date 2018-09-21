// @flow

import * as React from 'react';
import styled from 'styled-components';

import background from '../assets/background.jpg';
import logo from '../assets/logo-white.png';

const StyledLayout = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${background}) no-repeat center center fixed/cover;
  text-align: center;
`;

const LogoWrapper = styled.div`
  height: 40%;
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  transform: translateX(-50%);
  bottom: 0;
`;

type Props = {
  children: ?React.Node,
};

export const LandingLayout = ({ children }: Props) => (
  <StyledLayout>
    <LogoWrapper>
      <Logo src={logo} />
    </LogoWrapper>
    <div>{children}</div>
  </StyledLayout>
);
