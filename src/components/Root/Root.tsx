import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;

    }
`;

const Root = () => (
    <Fragment>
        <GlobalStyle />
    </Fragment>
);

export default hot(Root);
