import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';

import { rootReducer, initialRootState } from './store';
import { GlobalStyle, theme } from './theme';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialRootState,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
