import React from 'react';
import Box from '../styled/Box';
import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../assets/logotype-testio_black.svg';

const HeaderStyled = styled(Box)`
  height: 113px;
  display: flex;
  align-items: center;
`;

const Logo = styled(LogoSVG)`
  display: block;
  height: 30px;
  margin-left: 15px;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <Logo alt="Tesonet" />
    </HeaderStyled>
  );
}
