import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { ROUTE_PATH as loginRoute } from './containers/Auth/Login/LoginContainer';
import routes from './utils/routes';
import store from './utils/store';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <Switch>
            {
              routes.map((route, index) => (
                <Route key={ index } path={ route.path } component={ route.component } />
              ))
            }

            <Redirect from="/" to={ loginRoute } push={ false } />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
