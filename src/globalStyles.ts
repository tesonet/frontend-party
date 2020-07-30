import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-size: 1.6rem; /* =16px */
    line-height: 1.42857; /* ~20px */
  }
  
  body {
    font-family: ${theme.fonts.family};
    color: ${theme.colors.darkText};
    background: ${theme.colors.bg};
    font-weight: ${theme.fontWeights.lighter};
    padding: 0;
    margin: 0;
  }

  body:not(.accessibility) {
    button:focus {
        outline: 0;
    }
  }

  #root {
    height: 100%;
  }
 `;
