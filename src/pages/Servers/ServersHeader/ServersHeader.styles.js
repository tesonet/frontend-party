import styled from 'styled-components';

export const StyledContainer = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 35px 20px;
`;

export const StyledLogo = styled.img`
  width: 115px;
  height: 30px;
`;

export const StyledLogoutContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  cursor: pointer;
  color: black;
  font-weight: bold;
  &:hover {
    filter: invert(.5) sepia(2) saturate(0.6) hue-rotate(80deg);
  }
`;

export const StyledLogoutImage = styled.img`
  margin-right: 10px;
`;
