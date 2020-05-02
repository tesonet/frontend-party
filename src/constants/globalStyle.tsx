import { css, Global } from "@emotion/core";
import emotionReset from "emotion-reset";
import React from "react";

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}
      *,
          *::after,
          *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
      }
      body {
        @import url("https://fonts.googleapis.com/css?family=Roboto:300");
      }
      body,
      input {
        font-family: "Roboto", sans-serif;
      }
      button:focus {
        outline: none;
      }
      input:focus {
        outline: none;
      }
    `}
  />
);

export default GlobalStyle;
