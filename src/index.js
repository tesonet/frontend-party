import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.css';

import Routes from './components/Routes/Routes';
import configureStore from './state/store';
import registerServiceWorker from './utils/registerServiceWorker';

const history = createHistory();
const store = configureStore({ history });

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
