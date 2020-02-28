import React from 'react';
import styled from 'styled-components';
import backgroundImg from './assets/background.png';

const Background = styled.div`
  height: 100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const App = () => <Background />;
export default App;
