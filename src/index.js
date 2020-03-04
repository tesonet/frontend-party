import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import authReducer from './store/reducers/auth';
import serversReducer from './store/reducers/servers';
import App from './App';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';

const rootReducer = combineReducers({
  auth: authReducer,
  servers: serversReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
