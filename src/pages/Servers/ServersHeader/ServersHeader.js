import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '@/api/services/authentication.service';
import { clearServers } from '@/api/services/servers.service';
import darkLogo from '@/assets/images/dark-logo.svg';
import logoutLogo from '@/assets/images/logout.svg';
import {
  StyledContainer, StyledLogo, StyledLogoutContainer, StyledLogoutImage,
} from './ServersHeader.styles';

const ServersHeader = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logOut = () => {
    history.push('/login');
    dispatch(logout());
    dispatch(clearServers());
  };

  return (
    <StyledContainer>
      <StyledLogo src={darkLogo} alt="black-logo" />
      <StyledLogoutContainer onClick={logOut}>
        <StyledLogoutImage src={logoutLogo} alt="logout" />
        <div>Logout</div>
      </StyledLogoutContainer>
    </StyledContainer>
  );
};

export default ServersHeader;
