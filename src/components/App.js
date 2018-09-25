import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import 'babel-polyfill';
import 'isomorphic-fetch';
import './App.scss';

ReactDOM.render(
  <Header />, 
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
