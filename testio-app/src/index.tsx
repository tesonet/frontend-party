import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import FormPage from './components/FormPage/Form';
import LoginPage from './components/LoginPage/Login';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/form" exact={true} component={FormPage} />
        <Route component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();