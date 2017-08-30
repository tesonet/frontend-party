import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServers, logout } from '../../actions/index';

class ServersPage extends Component {
  componentWillMount() {

    if (this.props.login.userAuthenticated && this.props.login.token) {
      this.props.fetchServers();
    }
  }



  render() {
    return(
      <div>
      <h1>servers</h1>
      <button onClick={() => {this.props.logout()}} >Log out</button>
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
  },
  logout: () => {
    dispatch(logout());
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ServersPage);
