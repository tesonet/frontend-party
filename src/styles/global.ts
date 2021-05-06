import { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

export const GlobalStyle = createGlobalStyle`
  ${fonts}
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;

  }

  body {
    height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }


`
