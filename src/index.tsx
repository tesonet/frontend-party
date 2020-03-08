import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import {ProtectedRoute} from './components/ProtectedRoute';
import {store, routerHistory} from './store';
import {ROUTES} from './routes';
import {Login} from './views/Login';
import {ServerList} from './views/ServerList';

import './polyfills';

import './styles/index.scss';


const App: React.FC = () => (
  <Provider store={store} >
    <Router history={routerHistory} >
      <Switch>
        <Route path={ROUTES.LOGIN} >
          <Login/>
        </Route>
        <ProtectedRoute path={ROUTES.ANY} >
          <ServerList/>
        </ProtectedRoute>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
