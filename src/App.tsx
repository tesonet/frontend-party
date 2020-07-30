import * as React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./globalStyles";
import { theme } from "./theme";

export const App = () => {
  const handleTabButton = (e: KeyboardEvent) => {
    if (e.keyCode === 9) {
      document.body.classList.add("accessibility");
      window.removeEventListener("keydown", handleTabButton);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleTabButton);
    return () => window.removeEventListener("keydown", handleTabButton);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>hello from app {process.env.API_URL}</div>
    </ThemeProvider>
  );
};
