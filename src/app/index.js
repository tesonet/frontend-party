import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {ThemeProvider} from 'styled-components';

import {store, history} from './state';
import {theme} from './style';
import routes from './routes';


const ReduxApp = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

export default ReduxApp;
