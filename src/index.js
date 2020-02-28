import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducers/rootReducer';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
