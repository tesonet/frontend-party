import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from '../../containers/Login/Login';
import List from '../../containers/List/List';
import NotFound from '../NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        {["/", "/login"].map(path => (
          <Route
            key={path}
            exact
            path={path}
            component={Login}
          />
        ))}
        <PrivateRoute exact path="/list" component={List} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;