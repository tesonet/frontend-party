import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
