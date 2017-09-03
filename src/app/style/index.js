import {injectGlobal} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


const COLORS = {
  lightGreen1: '#9fd533',
  lightGreen2: '#86b300',
  red1: '#dc3545',
  grey1: '#999',
};


export const theme = {
  color: {
    accent1: COLORS.lightGreen1,
    errorText1: COLORS.red1,
    errorBorder1: COLORS.red1,
    inputGroupAddonColor1: COLORS.grey1,
    activeInputText: COLORS.grey1,
    primaryButtonBG: COLORS.lightGreen1,
    primaryButtonHoverBG: COLORS.lightGreen2,
  },
};


/* eslint-disable no-unused-expressions */
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
/* eslint-enable no-unused-expressions */
