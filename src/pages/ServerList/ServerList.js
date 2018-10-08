import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ServerList.css';
// import './ServerList.scss';

import Logotype from '../../components/Logotype/Logotype';
import testio from '../../assets/images/server-list/logotype-testio.-833x215.png';
import Button from '../../components/Button/Button';
import logout from '../../assets/images/server-list/icon-logout-17x17.png';

import apiTesonetServers from '../../api/tesonet/servers';
import database from '../../database/database';
import { orderBy } from 'lodash';

class ServerList extends Component {
  constructor() {
    super();

    this.state = { servers: [] };
  }

  buttonLogout() {
    database.token.remove();
  }

  componentDidMount() {
    document.getElementById('button-logout').onclick = this.buttonLogout;

    apiTesonetServers
      // .loginData(database.token.read())
      .loginData(localStorage.getItem('token'))
      .then(response => orderBy(response.data, ['distance', 'name']))
      .then(servers => this.setState({servers}));
  }

  render() {
    document.title = `${document.title} - Server List`;

    const {servers} = this.state;

    return (
      <div id="ServerList">
        <header className="container-fluid justify-content-between no-gutters row">
          <Logotype alt="Logotype testio." id="logotype-testio" src={testio} />
          <Link to="/">
            <Button
              iconAlt="Icon logout" iconId="icon-logout" iconSrc={logout}
              buttonId="button-logout" buttonText="Logout"
            />
          </Link>
        </header>
        <main className="table-responsive">
          <table className="table">
            <thead>
              <tr className="justify-content-between no-gutters row">
                <th>SERVER</th>
                <th>DISTANCE</th>
              </tr>
            </thead>
            <tbody>
              {servers.map(server => (
                <tr
                  className="justify-content-between no-gutters row"
                  // Sometimes browser console shows Warning error because server name or distance not unique.
                  // Server name and distance combination is unique.
                  key={`${server.name} ${server.distance}km`}
                >
                  <td>{server.name}</td>
                  <td>{server.distance} km</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

export default ServerList;
