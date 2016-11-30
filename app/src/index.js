import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import BrowserRouter from 'react-router/BrowserRouter';
import configureStore from './store/configureStore';
import './style.scss';

const store = configureStore();

const Placeholder = () => (
  <div>Placeholder</div>
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Placeholder} />
        <Match pattern="/login" component={Placeholder} />
        <Miss component={Placeholder} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'),
);
