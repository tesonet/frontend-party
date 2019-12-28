import styled from 'styled-components';
import backgroundImage from '../../assets/background.jpg';
import tesioLogo from '../../assets/logo-testio-main.svg';

export const StyledBackground = styled.div`
  background-image: url(${backgroundImage});
  position: fixed; 
  background-size: cover;
  top: 0; 
  left: 0; 
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img.attrs({
  src: tesioLogo,
})`
  width: 250px;
  height: 100px;
`;

export const StyledContent = styled.div`
  text-align: center;
`;
