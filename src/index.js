import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App/App';
import registerServiceWorker from './utils/registerServiceWorker';

render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
