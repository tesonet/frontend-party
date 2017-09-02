import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {ThemeProvider} from 'styled-components';

import {init} from './config';
import {store, history} from './state';
import {theme} from './style';
import routes from './routes';


export {init};


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
