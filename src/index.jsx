import 'bootstrap/dist/css/bootstrap.css';

import es6Promise from 'es6-promise';
import { render } from 'react-dom';
import React from 'react';

import { App } from './app';

// for IE11 support
if (typeof Promise !== 'function') {
    es6Promise.polyfill();
}

render(<App />, document.getElementById('root'));
