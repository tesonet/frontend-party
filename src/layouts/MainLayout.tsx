import * as React from 'react';
import styled from 'styled-components';

import { HeaderContainer } from '@containers/Header/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const MainLayout = ({ children }: MainLayoutProps) => (
  <LayoutContainer>
    <HeaderContainer />
    {children}
  </LayoutContainer>
);
