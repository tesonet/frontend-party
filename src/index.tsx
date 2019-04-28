// styles
import './scss/style.scss';
// react and react dependencies
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
// pages
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
// helpers
import { PrivateRoute } from './helpers/PrivateRoute';
import History from './helpers/History';

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Router history={History}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/list" component={ListPage} />
          <Route component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app') as HTMLElement);
