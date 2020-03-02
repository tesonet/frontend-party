import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import ServerList from '../servers/ServerList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Navbar />
        <ServerList />
      </div>
    )
  }
}

export default Dashboard;