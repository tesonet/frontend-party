import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Store from './Store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

    <App />

  , document.getElementById('root'));
registerServiceWorker();
