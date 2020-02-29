import React from 'react';
import styled from 'styled-components';
import backgroundImg from './assets/background.png';

const Background = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(11, 15, 39, 0.8), rgba(11, 15, 39, 0.8)), url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const BG = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(11, 15, 39);
  opacity: 0.8;
  z-index: 1000;
`;

const App = () => <Background />;

export default App;
