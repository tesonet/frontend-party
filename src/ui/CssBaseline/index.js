import {createGlobalStyle} from 'styled-components'
import theme from '../styles/theme'

const CssBaseline = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: ${theme.typography.fontFamily};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
    }

    input, button {
      border: 0;
      outline: 0;
      letter-spacing: 0.4px;
      font-family: ${theme.typography.fontFamily};
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
`

export default CssBaseline
