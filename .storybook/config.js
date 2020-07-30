import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { ThemeProvider } from "styled-components";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { theme } from "../src/theme";
import { themeMui } from "../src/theme/themeMui";
import { GlobalStyles } from "../src/globalStyles";

addParameters({
  options: {
    panelPosition: "right",
  },
});

addDecorator(
  withInfo({
    inline: true,
    header: false,
  })
);

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={themeMui}>
      <>
        <GlobalStyles />
        {story()}
      </>
    </MuiThemeProvider>
  </ThemeProvider>
));

addDecorator(withKnobs);

const req = require.context("../src/components", true, /.stories.tsx/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
