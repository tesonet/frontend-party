import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import { App_Routes } from './Routes';
import store, { history } from './store';

import './index.scss';

import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FormPageRoute from './components/PrivateRoutes/FormRoute';
import { initUser } from './features/user/actions';


store.dispatch(initUser() as any);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={App_Routes.LOGIN_PAGE} exact={true} component={App} />
        <FormPageRoute />
        <Route component={ErrorPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();