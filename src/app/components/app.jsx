
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createGlobalStyle } from 'styled-components';

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

const store = createStore();

if (getAuthTokenFromStorage()) {
    store.dispatch(setAuthenticated(true));
}

const App = () => (
    <Provider store={store}>
        <React.Fragment>
            <GlobalStyle />
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </React.Fragment>
    </Provider>
);

export default App;
