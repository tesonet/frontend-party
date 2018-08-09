import App from 'common/app';
import configureStore from 'common/store/configureStore';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'sanitize.css';
import './styles.scss';

const store = configureStore();

const Component: React.SFC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(<Component />, document.getElementById('app'));
