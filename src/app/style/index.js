import {injectGlobal} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';


const COLORS = {
  lightGreen1: '#9fd533',
  lightGreen2: '#86b300',
  red1: '#dc3545',
  grey1: '#999',
};


export const theme = {
  color: {
    accent1: COLORS.lightGreen1,
    errorRed1: COLORS.red1,
    activeInputText: COLORS.grey1,
    primaryButtonBG: COLORS.lightGreen1,
    primaryButtonHoverBG: COLORS.lightGreen2,
  },
};


/* eslint-disable */
injectGlobal`

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    overflow-x: hidden;
  }

  #root {
    height: 100%;
  }
`;
/* eslint-enable */
