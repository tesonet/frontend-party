import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { LoginContainer } from '@containers/Login/Login';
import { GlobalStyles } from './globalStyles';
import { theme } from './theme';
import { themeMui } from './theme/themeMui';

export const App = () => {
  const handleTabButton = (e: KeyboardEvent) => {
    if (e.keyCode === 9) {
      document.body.classList.add('accessibility');
      window.removeEventListener('keydown', handleTabButton);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleTabButton);
    return () => window.removeEventListener('keydown', handleTabButton);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={themeMui}>
        <GlobalStyles />
        <LoginContainer />
        <div>hello from app {process.env.API_URL}</div>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};
