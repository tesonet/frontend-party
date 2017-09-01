import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServers } from '../../actions/index';
import _, { uniqueId } from 'lodash';
import Header from './Header';
import './styles/ServersPageStyle.css'

class ServersPage extends Component {
  componentWillMount() {

  if (this.props.login.userAuthenticated && this.props.login.token) {
      this.props.fetchServers();
    }
  }

  listServers() {
    return this.props.servers.servers.map((server) => {
      server.id = _.uniqueId('ID-');
      return (
          <div className='list row'>
              <div className='left col-xs-6'>
                <div key={server.id}>{server.name}</div>
              </div>
              <div className='right col-xs-6'>
                <div key={server.id}>{server.distance}</div>
            </div>
          </div>
      )
    })
  }

  render() {
    return(
      <div>
      <div className='container-fluid'>
        <Header />
        <div className='info row'>
            <div className='left col-xs-6'>
              <div>Server</div>
            </div>
            <div className='right col-xs-6'>
              <div>Distance</div>
          </div>
        </div>
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
