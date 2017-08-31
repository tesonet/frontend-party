import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServers } from '../../actions/index';
import _, { uniqueId } from 'lodash';
import Header from './Header';

class ServersPage extends Component {
  componentWillMount() {

  if (this.props.login.userAuthenticated && this.props.login.token) {
      this.props.fetchServers();
    }
  }

  listServers() {
    return this.props.servers.servers.map((server) => {
      server.id = _.uniqueId('ID-');
      console.log(server);
      return (
        <li key={server.id}>{server.name} {server.distance}</li>
      )
    })
  }

  render() {
    return(
      <div>
      <div className='container-fluid'>
      <Header />
        <h1>servers</h1>
        {this.listServers()}
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.LoginReducer,
    servers: state.ServersReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServers: () => {
      dispatch(fetchServers());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServersPage);
