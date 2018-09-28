import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';

import AlertTemplate from './AlertTemplate';
import Login from './Login';
import Servers from './Servers';
import TokenStorage from '../utilities/TokenStorage';
import bindFunctions from '../utilities/bindFunctions';

// React Router seems unnecessary here. The application has a single public route and a single
// private route, only one of which is accessible at any given time. The routing code below could be
// replaced with a single if statement. The only thing the router accomplishes is changing the URL.
// I would have written this without React Router, but I didn't want to deviate from the
// requirements too much.

// Many projects define a separate component for redirecting private routes. It's usually named
// something like PrivateRoute. That seems like overkill for just two routes, so I didn't bother.

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {token: props.token};

    bindFunctions(
      this,
      'onLogin',
      'onLogout'
    );
  }

  onLogin(token) {
    TokenStorage.setToken(token);
    this.setState({token});
  }

  onLogout() {
    TokenStorage.removeToken();
    this.setState({token: null});
  }

  render() {
    const {token} = this.state;

    const canonicalRoute = token === null ? '/login' : '/servers';

    return (
      <AlertProvider template={AlertTemplate} position="bottom right" timeout={3000}>
        <BrowserRouter>
          {
            // Normally, the children of Route are always rendered. But Switch only renders the
            // first matching route, which lets us use a very convenient shorthand. Strangely, none
            // of the examples in the React Router documentation make use of this.
            // Could this be an unintended feature?
          }
          <Switch>
            <Route exact path={canonicalRoute}>
              <Switch>
                <Route exact path="/login">
                  <Login onLogin={this.onLogin} />
                </Route>
                <Route exact path="/servers">
                  <Servers token={token} onLogout={this.onLogout} />
                </Route>
              </Switch>
            </Route>
            <Redirect to={canonicalRoute} />
          </Switch>
        </BrowserRouter>
      </AlertProvider>
    );
  }
}
