import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateComponent } from './components';
import { Login, Main } from './layouts';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <PrivateComponent path="/main" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
