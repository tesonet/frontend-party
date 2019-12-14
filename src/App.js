import React from 'react';
import { Provider } from 'react-redux';

import AppRouter from './AppRouter';
import { store } from './state';

import './style.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
