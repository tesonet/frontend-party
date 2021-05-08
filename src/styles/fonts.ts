import { css } from 'styled-components'
import RobotoRegularWoff from '../assets/fonts/roboto-v27-latin-regular.woff'
import RobotoRegularWoff2 from '../assets/fonts/roboto-v27-latin-regular.woff2'
import RobotoLightWoff from '../assets/fonts/roboto-v27-latin-300.woff'
import RobotoLightWoff2 from '../assets/fonts/roboto-v27-latin-300.woff2'
import RobotoHeavytWoff from '../assets/fonts/roboto-v27-latin-700.woff'
import RobotoHeavytWoff2 from '../assets/fonts/roboto-v27-latin-700.woff2'

export const fonts = css`
  /* roboto-300 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'), url(${RobotoLightWoff2}) format('woff2'),
      url(${RobotoLightWoff}) format('woff');
  }
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'), url(${RobotoRegularWoff2}) format('woff2'),
      url(${RobotoRegularWoff}) format('woff');
  }
  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Bold'), local('Roboto-Bold'), url(${RobotoHeavytWoff2}) format('woff2'),
      url(${RobotoHeavytWoff}) format('woff');
  }
`
