import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServersContainer from './containers/Servers/ServersContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ ServersContainer } />
        </Switch>
      </Router>
    );
  }
}

export default App;
