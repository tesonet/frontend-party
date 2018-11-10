
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import Routes from './routes';
import store from '../store';

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
    <Provider store={store}>
        <AppContainer>
            <GlobalStyle />
            <Router>
                <Routes />
            </Router>
        </AppContainer>
    </Provider>
);

export default App;
