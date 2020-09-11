import React from 'react';
import { StyledContainer, StyledLogo, StyledLogoutContainer, StyledLogoutImage } from './ServersHeader.styles'
import darkLogo from '@/assets/images/dark-logo.svg'
import logout from '@/assets/images/logout.svg'

const ServersHeader = () => (
  <StyledContainer>
    <StyledLogo src={darkLogo} alt='black-logo'></StyledLogo>
    <StyledLogoutContainer>
      <StyledLogoutImage src={logout} alt='logout' />
      <div>Logout</div>
    </StyledLogoutContainer>
  </StyledContainer>
)

export default ServersHeader;