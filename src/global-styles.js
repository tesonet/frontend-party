import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }

  #root {
    & > * {
      font-size: 16px;
      height: 100vh;
    }
  }
`;
