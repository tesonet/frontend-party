import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import './fonts/RobotoRegular.woff2';

import {
  setAuthToken
} from './actions/init';

// DYNAMIC IMAGES IMPORT

const importImages = require => {
  require.keys().forEach(imagePath => require(imagePath))
};

importImages(
  require.context('./images', true, /\.(png|jpe?g|svg)$/)
);

const store = configureStore();

// CONFIGURE TOASTS

toast.configure({
  autoClose: 3000,
  draggable: false,
  hideProgressBar: true,
  pauseOnHover: true,
  newestOnTop: true,
  bodyClassName: 'toast-custom-font'
});

let isAuthToken = localStorage.getItem('authToken');
isAuthToken && store.dispatch(setAuthToken(isAuthToken));

let initApp = () => {
  const jsx = (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

initApp();
