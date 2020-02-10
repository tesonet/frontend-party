import React from "react";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const GlobalStyles = () => (
  <>
    <Normalize />
    <GlobalStyle />
  </>
);

export default GlobalStyles;
