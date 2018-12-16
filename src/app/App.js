import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import AuthorizationPage from "./views/AuthorizationPage";
import ServersList from "./views/ServersList";
import PageNotFound from "./views/PageNotFound";
import management from "./management";

class App extends Component {
  componentDidMount() {
    const { fetchServers, token } = this.props;
    if (token) {
      fetchServers();
    }
  }

  render() {
    const { token } = this.props;

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            component={token ? ServersList : AuthorizationPage}
          />
          <Route exact path="/404" component={PageNotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: management.selectors.getToken(state),
  servers: management.selectors.getServers(state)
});

const mapDispatchToProps = dispatch => ({
  authorizing: (username, password) =>
    dispatch(management.actions.authorizing(username, password)),
  fetchServers: () => dispatch(management.actions.fetchServers())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
