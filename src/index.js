// ie11 polyfills
import '@babel/polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';

import './styles/all.css';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));
