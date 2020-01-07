import React from 'react';
import Box from '../styled/Box';
import { ReactComponent as LogoutSVG } from '../../assets/ico-logout.svg';
import styled from 'styled-components';
import useAuth from '../utils/useAuth';

const LogoutSVGStyled = styled(LogoutSVG)`
  display: block;
  margin-right: 12px;
`;

const BoxStyled = styled(Box)`
  cursor: pointer;
`;

export default function LogoutButton() {
  const { removeToken } = useAuth();
  return (
    <BoxStyled
      display="flex"
      onClick={removeToken}
      marginRight="10px"
      fontSize={0}
    >
      <LogoutSVGStyled />
      <span>Logout</span>
    </BoxStyled>
  );
}
