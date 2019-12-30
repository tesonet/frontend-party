import styled from 'styled-components';
import headerTestio from '../assets/logo-testio-header.svg';
import colors from '../theme';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const HeaderLogo = styled.img.attrs({
  src: headerTestio,
})`
  width: 150px;
  height: 30px;
`;

export const IconContainer = styled.div`
  display: flex;
  background-color: ${colors.white};
  border: none;
  align-items: center;
  cursor: pointer;
  color: ${colors.darkBlue};
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 0.35px;
  line-height: 30px;
  padding-left: 10px;
  
  :hover {
    color: ${colors.green};
  }
`;

export const LogoutIcon = styled.img`
  padding-right: 10px;
`;
