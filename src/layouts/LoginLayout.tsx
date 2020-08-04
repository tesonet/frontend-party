import * as React from 'react';
import styled from 'styled-components';

import * as Background from '@assets/background.jpg';

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  background: url(${Background}) no-repeat center fixed;
  background-size: cover;
`;

export const LoginLayout = ({ children }: LoginLayoutProps) => <LayoutContainer>{children}</LayoutContainer>;
