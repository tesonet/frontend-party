import React from 'react';
import { withAlert } from 'react-alert';

import Icon from './Icon';
import TesonetAPI from '../utilities/TesonetAPI';
import bindFunctions from '../utilities/bindFunctions';

import smallLogo from '../images/smallLogo.png';

const compareName = (serverA, serverB) => {
  return serverA.country.localeCompare(serverB.country)
    || serverA.number - serverB.number;
};

const compareDistance = (serverA, serverB) => {
  return serverA.distance - serverB.distance;
};

const ORDER = {
  name: [compareName, compareDistance],
  distance: [compareDistance, compareName]
};

const buildComparator = (order, ascending) => {
  const [first, second] = order;
  const comparator = ([serverA, indexA], [serverB, indexB]) => (
    first(serverA, serverB)
      || second(serverA, serverB)
      || indexA - indexB
  );
  return ascending ? comparator : (a, b) => comparator(b, a);
};

class Servers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      order: ORDER.distance,
      ascending: true,
      servers: []
    };

    bindFunctions(this, 'onRefresh');
  }

  componentDidMount() {
    const {token, onLogout, alert} = this.props;

    TesonetAPI
      .getServers(token)
      .then(
        servers => {
          this.setState({loading: false, servers});
          this.sortServers();
        },
        error => {
          this.setState({loading: false});
          if (error instanceof TesonetAPI.HTTPError) {
            onLogout();
            alert.error('Login token no longer valid.');
          } else {
            alert.error('A network error has occured.');
          }
        }
      );
  }

  onRefresh() {
    this.setState({loading: true});
    this.componentDidMount();
  }

  onSort(newOrder) {
    this.setState(({order: oldOrder, ascending}) => {
      if (newOrder === oldOrder) {
        return {ascending: !ascending};
      } else {
        return {order: newOrder, ascending: true};
      }
    });
    this.sortServers();
  }

  sortServers() {
    this.setState(({order, ascending, servers}) => ({
      servers: servers
        .map((server, index) => [server, index])
        .sort(buildComparator(order, ascending))
        .map(([server, index]) => server)
    }));
  };

  renderHeader(headerOrder, label) {
    const {order, ascending} = this.state;

    const iconClass = ascending ? 'fa-sort-down' : 'fa-sort-up';
    const visibilityClass = order === headerOrder ? 'visible' : 'invisible';

    return (
      <th onClick={() => this.onSort(headerOrder)}>
        {label}
        <Icon icon={iconClass} className={visibilityClass} title="Sort" />
      </th>
    );
  }

  render() {
    const {loading, servers} = this.state;

    const tableRows = servers.map((server, index) => (
      // Server names returned by the API are not always unique, so we can't use them as keys.
      <tr key={index}>
        <td>{server.name}</td>
        <td>{server.distance} km</td>
      </tr>
    ));

    return (
      <div className="container-fluid">
        <div className="servers-container">
          <nav className="navbar">
            <div className="navbar-brand">
              <img src={smallLogo} alt="testio." />
            </div>
            <div className="servers-buttons">
              <button onClick={this.onRefresh} disabled={loading} type="button">
                <Icon icon="fa-sync" className={loading ? 'spinning' : ''} title="Refresh" />
                Refresh
              </button>
              <button onClick={this.props.onLogout} type="button">
                <Icon icon="fa-sign-out-alt" title="Logout" />
                Logout
              </button>
            </div>
          </nav>
          <table>
            <thead>
              <tr>
                {this.renderHeader(ORDER.name, 'Server')}
                {this.renderHeader(ORDER.distance, 'Distance')}
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withAlert(Servers);
