import React, { Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./utils/history";

import GlobalStyle from "./utils/globalStyles";
import Login from "./pages/Login";

import { getToken } from "./api/api";

const About = () => <h2>About</h2>;

class App extends React.Component {
  state = {
    isAuthenticated: false
  };

  authenticate = async credentials => {
    const response = await getToken(credentials);
    localStorage.setItem("token", response.token);

    this.setState({ isAuthenticated: true });
    history.push("/list");
  };

  logout = () => {
    localStorage.clearItem("token");
    this.setState({ isAuthenticated: false });

    history.push("/");
  };

  render() {
    const { isAuthenticated } = this.state;
    return (
      <Router history={history}>
        <Fragment>
          <GlobalStyle />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Login authenticate={this.authenticate} />}
            />
            {isAuthenticated ? (
              <Route
                path="/list"
                render={() => <About logout={this.logout} />}
              />
            ) : null}
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
