import styled, { createGlobalStyle } from 'styled-components';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        height: 100%
    }
`;

const AppContainer = styled.div`
    height: 100%
`;

const App = () => (
    <AppContainer>
        <GlobalStyle />
        <Router>
            <Routes />
        </Router>
    </AppContainer>
);

export default App;
