import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import { NonAuthenticatedRoute, AuthenticatedRoute } from './shared/guardedRoutes/guardedRoutes';
import { Login } from './feature/login/Login';
import { Servers } from './feature/servers/Servers';
import { Spinner } from './shared/spinner/Spinner';


type AppComponentProps = {
  store: Store;
};

const App: React.FC<AppComponentProps> = ({store}) => (
  <Provider store={store}>
    <Spinner>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Redirect to="/servers" />} />
          <AuthenticatedRoute path="/servers/" component={Servers} />
          <NonAuthenticatedRoute path="/login/" component={Login} />
        </Switch>
      </Router>
    </Spinner>
  </Provider>
);


export default App;
