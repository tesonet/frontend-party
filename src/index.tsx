import { createGlobalStyle, getTheme } from '@components/theme';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';
import { initializeStore } from './redux/bootstrap';

const history = createBrowserHistory();
const store = initializeStore(history);
const theme = getTheme();

const GlobalStyles = createGlobalStyle`
  body, html, #app-root {
    height: 100%;
    margin: 0;
  }

  body {
    font-size: 18px;
  }
`;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <GlobalStyles />
      <App history={history} theme={theme} />
    </Provider>,
    document.getElementById('app-root'),
  );
});

if (module.hot) {
  module.hot.accept();
}
