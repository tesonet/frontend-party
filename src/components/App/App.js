import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LogIn from '../../pages/LogIn/LogIn';
import ServerList from '../../pages/ServerList/ServerList';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="/server-list" component={ServerList} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default App;
