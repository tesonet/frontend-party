import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import ROUTES from '@Config/routes';
import { ErrorBoundary } from '@Common';

import Container from './Container';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import LoginPage from './components/LoginPage/LoginPage';
import ServerListPage from './components/ServerListPage/ServerListPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import ProtectedRoute from './routes/ProtectedRoute';
import { useUserAuthentication } from './hooks';

const App = () => {
  const { isAuthenticated } = useUserAuthentication();

  return (
    <ErrorBoundary>
      <Container>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path={ROUTES.MAIN} component={Main} />
            <ProtectedRoute
              path={ROUTES.LOGIN}
              component={LoginPage}
              fallBackRoute={ROUTES.MAIN}
              permissionRule={!isAuthenticated}
            />
            <ProtectedRoute
              path={ROUTES.SERVER_LIST}
              component={ServerListPage}
              fallBackRoute={ROUTES.MAIN}
              permissionRule={isAuthenticated}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ErrorBoundary>
  );
};

export default App;
