import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import LoginPage from '../LoginPage/LoginPage';

const theme = {
    colors: {
        primary: '#9fd533',
        muted: '#b3b3b3',
        light: '#fff',
        danger: '#d6564f',
        hovered: {
            primary: '#86b300',
        },
    },
};

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,700&display=swap');
    
    html {
      box-sizing: border-box;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    input, button {
        border: 0;
        outline: 0;
        letter-spacing: 0.4px;
    }
    
    button {
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
    }
`;

type Props = {
    store: any;
};

const Root = ({ store }: Props) => (
    <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <LoginPage />
        </ThemeProvider>
    </Provider>
);

export default hot(Root);
