import { createGlobalStyle } from "styled-components";

import RobotoRegular from "../assets/fonts/Roboto/Roboto-Regular.ttf";
import RobotoBold from "../assets/fonts/Roboto/Roboto-Bold.ttf";
import RobotoLight from "../assets/fonts/Roboto/Roboto-Light.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(${RobotoRegular});
  }

  @font-face {
    font-family: Roboto;
    font-weight: light;
    src: url(${RobotoLight});
  }

  @font-face {
    font-family: Roboto;
    font-weight: bold;
    src: url(${RobotoBold});
  }

  body {
    font-family: Roboto, Helvetica, Arial;
  }
`;

export default GlobalStyle;
