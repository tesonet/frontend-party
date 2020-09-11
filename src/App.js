import React from 'react';
import GlobalStyle from './styles';
import LoginPage from '@/pages/Login/components/LoginPage/LoginPage';
import ServersPage from '@/pages/Servers/components/ServersPage/ServersPage';

const App = () => (
  <>
    <GlobalStyle />
    <LoginPage />
  </>
);

export default App;
