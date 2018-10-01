import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';
import TokenStorage from './utilities/TokenStorage';

import './style';

ReactDOM.render(
  <Application token={TokenStorage.getToken()} />,
  document.getElementById('testio-application')
);
