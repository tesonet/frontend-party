import React  from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import ROUTES from '@Config/routes';

import Container from './Container';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import LoginPage from './components/LoginPage/LoginPage';
import ServerListPage from './components/ServerListPage/ServerListPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import ProtectedRoute from './routes/ProtectedRoute';
import { useUserAuthentication } from './hooks';

const App = () => {
  const { isAuthenticated, updateUserAuthentication } = useUserAuthentication();

  return (
    <Container>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path={ROUTES.MAIN} component={Main} />
          <Route path={ROUTES.LOGIN} component={LoginPage} />
          <ProtectedRoute
            path={ROUTES.SERVER_LIST}
            component={ServerListPage}
            fallBackRoute={ROUTES.MAIN}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
