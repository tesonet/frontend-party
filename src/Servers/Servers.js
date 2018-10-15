import React, { Component } from 'react';
import ServersHeader from './ServersHeader';
import ServersList from './ServersList';

class Servers extends Component {
  render() {
    return (<div>
      <ServersHeader/>
      <ServersList/>
    </div>);
  }
}

export default Servers
