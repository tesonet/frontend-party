import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    height: 100%;
    width: 100%;
  }

  #root {
    & > * {
      font-size: 16px;
      height: 100vh;
    }
  }
`;
