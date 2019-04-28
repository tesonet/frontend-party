
// styles
import './scss/style.scss';
// react and react dependencies
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// pages
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
// helpers
import { PrivateRoute } from './helpers/PrivateRoute';

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Router>
          <Route path="/" component={LoginPage} />
          <PrivateRoute path="/list" component={ListPage} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app') as HTMLElement);
