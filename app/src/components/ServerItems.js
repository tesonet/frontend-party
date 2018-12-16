import React, { Component } from 'react';
import { ApiUtil } from '../api/apiUtil.js'
import ServerItem from './ServerItem.js';
import Header from './Header.js';
import '../sass/serveritems.scss';

class ServerItems extends Component {
  state = {
    servers: [],
    filteredServers: [],
  };

  filterItems = (event, key) => {
    const filteredServers = this.state.servers.filter(el => {
      return el[key].toString().toLowerCase().includes(event.target.value.toLowerCase());
    })
    this.setState({ filteredServers: filteredServers });
  }

  sortServers = servers => {
    return servers.sort((a, b) => {
      return a.name - b.name || a.distance - b.distance;
    })
  }

  componentDidMount() {
    ApiUtil('/servers', 'GET', null, true)
      .then(response => {
        const sorted = this.sortServers(response);
        this.setState({
          servers: sorted,
          filteredServers: sorted,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { filteredServers } = this.state;

    return (
      <div>
        <Header />
        <div className='row'>
          <div className='card server-list-container'>
            <div className='card-header'>
              <ServerItem name='Server' distance='Distance' />
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <div className='row justify-content-between'>
                  <div className='col-6 col-sm-4'>
                    <input
                      type='text'
                      className='form-control server-item-input'
                      placeholder='Filter servers by name'
                      onChange={(e) => this.filterItems(e, 'name')}
                    />
                  </div>
                  <div className='col-6 col-sm-4'>
                    <input
                      type='text'
                      className='form-control server-item-input'
                      placeholder='Filter servers by distance'
                      onChange={(e) => this.filterItems(e, 'distance')}
                    />
                  </div>
                </div>
              </li>
              {filteredServers.map((server, idx) =>
                <li key={idx} className='list-group-item'>
                  <ServerItem name={server.name} distance={`${server.distance} km`} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ServerItems;