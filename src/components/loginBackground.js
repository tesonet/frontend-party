import styled from 'styled-components';
import backgroundImg from '../assets/background.png';

export const LoginBackground = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(11, 15, 39, 0.8), rgba(11, 15, 39, 0.8)), url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
