
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import styled, { createGlobalStyle } from 'styled-components';

import Routes from './routes';
import createStore, { history } from '../store';
import { getAuthTokenFromStorage } from '../utils';

import { setAuthenticated } from '../actions';

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

const store = createStore();
const authToken = getAuthTokenFromStorage();

if (authToken) {
    store.dispatch(setAuthenticated(true));
}

const App = () => (
    <Provider store={store}>
        <AppContainer>
            <GlobalStyle />
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </AppContainer>
    </Provider>
);

export default App;
