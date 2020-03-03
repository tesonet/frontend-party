import styled from 'styled-components';
import backgroundImg from '../../assets/png/background.jpg';

export default styled.div`
  height: 100vh;
  background: linear-gradient(rgba(11, 15, 39, 0.8), rgba(11, 15, 39, 0.8)), url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
