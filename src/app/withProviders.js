import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { StyletronProvider } from 'styletron-react';
import { PersistGate } from 'redux-persist/integration/react';
import { configStore } from './store';
import styletron from './styletron';

const history = createBrowserHistory();

const { store, persistor } = configStore(history);

const WitProviders = Component => props => (
  <StyletronProvider styletron={styletron()}>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Component {...props} />
        </ConnectedRouter>
      </PersistGate>
    </ReduxProvider>
  </StyletronProvider>
);

export default WitProviders;
