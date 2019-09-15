import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store/';
import Router from './Router/';

ReactDOM.render(<Router store={store}/>, document.getElementById('react-root'));