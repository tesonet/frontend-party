import styled from 'styled-components';
import backgroundImage from '../../assets/background.jpg';
import testioLogo from '../../assets/logo-testio-main.svg';

export const StyledBackground = styled.div`
  background-image: url(${backgroundImage});
  position: fixed; 
  display: flex;
  background-size: cover;
  top: 0; 
  left: 0; 
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img.attrs({
  src: testioLogo,
})`
  width: 250px;
  height: 100px;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
`;
