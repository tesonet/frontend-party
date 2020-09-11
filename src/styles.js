import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    @import url("https://fonts.googleapis.com/css?family=Roboto:300");
    font-family: "Roboto", sans-serif;
  }
`

export default GlobalStyle;