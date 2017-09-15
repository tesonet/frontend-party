import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {ThemeProvider} from 'styled-components';
import 'babel-polyfill';

import i18n from '~/i18n';
import auth from '~/auth';

import {store, history} from './state';
import {theme} from './style';
import routes from './routes';


export const init = () => {
  i18n.init();
  auth.init({dispatch: store.dispatch});
};


const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
