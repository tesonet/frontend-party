import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './components/Login';
import { ServersList } from './components/ServersList';
import { storeBuilder } from './redux/store';
import './index.scss';

const App: React.FC = () => {
  return (
    <Provider store={storeBuilder()}>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path={ROUTES.serversList}>
            <ServersList />
          </ProtectedRoute>
          <Route path={ROUTES.login} component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
