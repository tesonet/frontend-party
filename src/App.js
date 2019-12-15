import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppRouter from './AppRouter';
import { store } from './state';

import './style.css';

function App() {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <div>
          <AppRouter />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
