import React, { Component } from 'react';
import { ApiUtil } from '../api/apiUtil.js'
import ServerItem from './ServerItem.js';
import Header from './Header.js';

const listStyle = {
  width: '100%'
}

class Servers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: [],
    };
  }

  componentDidMount() {
    ApiUtil('/servers', 'GET', null, true)
      .then(response =>  {
        this.setState({ servers: response })
      })
      .catch(err =>  console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
            <div className="card" style={listStyle}>
              <div className="card-header">
                <ServerItem name="Server" distance='Distance'/>
              </div>
              <ul className="list-group list-group-flush">
                {this.state.servers.map((server, idx) => 
                  <li key={idx} className="list-group-item">
                    <ServerItem name={server.name} distance={`${server.distance} km`}/>
                  </li>
                )}
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Servers;
