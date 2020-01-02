import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:300');
    position: relative;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.4px;
  }
`;

export default GlobalStyle;
