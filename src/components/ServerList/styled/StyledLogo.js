import React from 'react';
import styled from 'styled-components';

import LogoImage from '../../../assets/logo-dark.png';

const StyledContainer = styled.img`
  max-width: 6rem;
`;

const StyledLogo = props => (
  <StyledContainer src={LogoImage} alt="Testio logo" {...props} />
);

export default StyledLogo;
