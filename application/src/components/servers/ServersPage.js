import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServers } from '../../actions/index';
import _, { uniqueId } from 'lodash';
import Header from './Header';
import { Scrollbars } from 'react-custom-scrollbars';
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
          <div className='list row' key={server.id}>
                <div className='col-xs-6'>{server.name}</div>
                <div className='right col-xs-6'>{server.distance} km</div>
          </div>
      )
    })
  }

  render() {
    return(
      <div>
          <Header />
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
