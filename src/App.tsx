import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';

import { Routes } from '@routes/Routes';
import { history } from '@redux/store';
import { NotificationContainer } from '@containers/Notification/Notification';
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
        <ConnectedRouter history={history}>
          <NotificationContainer />
          <Routes />
        </ConnectedRouter>
        <GlobalStyles />
      </MuiThemeProvider>
    </ThemeProvider>
  );
};
