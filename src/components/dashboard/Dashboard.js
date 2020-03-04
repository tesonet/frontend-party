import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import ServerList from '../servers/ServerList';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { authToken } = this.props;
    if (authToken === null) return <Redirect to='/signin' />

    return (
      <div className="dashboard">
        <Navbar />
        <ServerList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authToken: state.auth.authToken
  }
}

export default connect(mapStateToProps)(Dashboard);