import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import { APP_ROUTES } from './Routes';
import store, { history } from './store';

import LoginPage from 'components/LoginPage/Login';
import FormPageRoute from 'components/PrivateRoutes/FormRoute';
import { initUser } from 'features/user/actions';

import 'scss/index.scss';

store.dispatch(initUser() as any);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          path={APP_ROUTES.LOGIN_PAGE}
          exact={true}
          component={LoginPage}
        />
        <FormPageRoute />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
