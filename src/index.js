import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './store/reducers/rootReducer';
import App from './App';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
