import React from 'react';
import styled from 'styled-components';

import LogoImage from '../../../assets/logo.png';

const StyledContainer = styled.div`
  margin-bottom: 4rem;
  text-align: center;

  img {
    max-width: 70%;
  }
`;

const StyledLogo = props => (
  <StyledContainer>
    <img src={LogoImage} alt="Testio logo" {...props} />
  </StyledContainer>
);

export default StyledLogo;
