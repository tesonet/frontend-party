import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
// import './index.scss';

import App from './components/App/App';

const element = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(element, document.getElementById('root'));
