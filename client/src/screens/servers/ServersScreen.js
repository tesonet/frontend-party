import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'seamless-immutable';
import { withRouter } from 'react-router-dom';
import { ServerRow } from '../../components/servers';
import { LoadingView } from '../../components/ui';
import * as serversActions from '../../reducers/servers/actions';
import * as loginActions from '../../reducers/login/actions';
import { ServersScreenStyle } from './styles';

class ServersScreen extends Component {
  componentWillMount() {
    const { dispatch, token, fetch } = this.props;

    if (token) {
      fetch();
    }
  }

  onLogout() {
    const { dispatch } = this.props;
    dispatch(loginActions.logout());
  }

  renderHeader() {
    return (
        <div className={'header'}>
          <img src={require('../../assets/img/logo.png')} alt={'tesonet logo'}/>
          <a onClick={() => this.onLogout()} className={'logout'}>
            <i className={'fa fa-sign-out'}></i>
            <span>Logout</span>
          </a>
        </div>
    );
  }

  renderLoading() {
    return (
      <LoadingView />
    );
  }

  renderEmpty() {
    return (
      <h3>There is no servers. Sorry!</h3>
    );
  }

  renderServers() {
    const { servers } = this.props;
    const Rows = servers.map(
      (server) => {
        const { name, distance } = server;

        return (
          <ServerRow name={name} distance={distance} key={`${name}${distance}`}/>
        );
      }
    );

    return (
      <div className={'servers-list'}>
        <div className={'top'}>
          <span>Server</span>
          <span>Distance</span>
        </div>
        { Rows }
      </div>
    );
  }

  renderContent() {
    const { servers } = this.props;

    return (
      <div className={'servers-screen'}>
        {this.renderHeader()}
        {servers.length > 0 ? this.renderServers() : this.renderEmpty()}
      </div>
    );
  }

  render() {
    const { isFetching } = this.props;

    return (
      isFetching ? this.renderLoading() : this.renderContent()
    );
  }
}

function mapStateToProps(state, props) {
  const { servers, isFetching, errorMessage } = state.servers;
  const { token } = state.login;
  let sortedServers = Immutable.asMutable(servers);
  sortedServers = sortedServers.sort(
    (a, b) => a['distance'] - b['distance'] || a['name'].toLowerCase() > b['name'].toLowerCase()
  );

  return {
    isFetching,
    errorMessage,
    token,
    servers: sortedServers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: bindActionCreators(serversActions.fetch, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServersScreen));
