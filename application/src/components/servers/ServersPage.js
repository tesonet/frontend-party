import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServers } from '../../actions/index';
import { uniqueId, sortBy } from 'lodash';
import Header from './Header';
import { Scrollbars } from 'react-custom-scrollbars';
import './styles/ServersPageStyle.css'

class ServersPage extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentWillMount() {
  if (this.props.login.userAuthenticated && this.props.login.token) {
      this.props.fetchServers();
    }
    console.log(JSON.parse(localStorage.getItem('reduxPersist:LoginReducer')).token);
  }

  listServers() {
    return this.props.servers.servers.map((server) => {
      server.id = uniqueId('ID-');
      return (
          <div className='list row' key={server.id}>
                <div className='col-xs-6'>{server.name}</div>
                <div className='right col-xs-6'>{server.distance} km</div>
          </div>
      )
    })
  }

  sortServers(field) {
    let serverList = this.props.servers.servers;
    this.props.servers.servers = sortBy(serverList, field);
    this.setState(this.props);
  }

  render() {
    return(
      <div>
          <Header />
          <div className='info row'>
              <div className='col-xs-6' onClick={() => {this.sortServers('name')}}>Server</div>
              <div className='right col-xs-6' onClick={() => {this.sortServers('distance')}}>Distance</div>
          </div>
            <div className='servers container-fluid'>
              <Scrollbars autoHide={true}>
                {this.listServers()}
              </Scrollbars>
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
