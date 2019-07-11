import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,700&display=swap');
    
    html {
      box-sizing: border-box;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    input, button {
        border: 0;
        outline: 0;
        letter-spacing: 0.4px;
    }
    
    button {
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
