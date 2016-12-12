import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Redirect from 'react-router/Redirect';
import Header from '../components/Header';
import List from '../components/List';
import * as serversActions from '../actions/servers';
import * as authenticationActions from '../actions/authentication';
import './Main.scss';

export class Main extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    servers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,
    })),
    fetchServers: PropTypes.func.isRequired,
    signoutUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchServers();
  }

  onLogout = () => {
    this.props.signoutUser();
  }

  render() {
    const { authenticated, servers } = this.props;
    return !authenticated
    ? <Redirect to="/login" />
    : (
      <div className="page main">
        <Header
          onButtonClick={this.onLogout}
        />
        <List data={servers} />
      </div>
    );
  }
}

const sortByDistanceThenByName = (a, b) => (a.distance === b.distance
  ? a.name.toUpperCase().localeCompare(b.name.toUpperCase())
  : a.distance - b.distance);

export default connect(({ authentication, servers }) => ({
  authenticated: authentication.authenticated,
  servers: servers.sort(sortByDistanceThenByName),
}), { ...serversActions, ...authenticationActions })(Main);
