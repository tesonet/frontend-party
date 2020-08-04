import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import * as DarkLogo from '@assets/logo-dark.png';
import { LogoutButton } from '@components/LogoutButton/LogoutButton';

interface HeaderProps {
  onLogout: () => void;
}

const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 9.4rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  background-color: ${themeGet('colors.white')};
  align-items: center;
`;

const Image = styled.img`
  height: 3rem;
`;

export const Header = ({ onLogout }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <Image src={DarkLogo} alt="Testio" />
      <LogoutButton onClick={onLogout}>Logout</LogoutButton>
    </HeaderWrapper>
  );
};
