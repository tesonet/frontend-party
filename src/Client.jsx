import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import isIE9 from './utils/isIE9';
import App from './App';

// IE9 doesnt support pushState, thus gracefully degrading the router to hash state
const Router = isIE9() ? HashRouter : BrowserRouter;

const renderApp = () => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
