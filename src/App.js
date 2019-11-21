import React from 'react';
import Routes from 'router/Routes';
import { createGenerateClassName, StylesProvider, ThemeProvider } from '@material-ui/styles';
import defaultTheme from 'themes/defaultTheme';
import { CssBaseline } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const generateClassName = createGenerateClassName({
  disableGlobal: true,
});

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={defaultTheme}>
        <StylesProvider generateClassName={generateClassName}>
          <CssBaseline />
          <Routes />
        </StylesProvider>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
