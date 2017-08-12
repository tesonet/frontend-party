import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ServerRow } from '../../components/servers';
import { ImageIcon } from '../../components/ui';
import * as serversActions from '../../reducers/servers/actions';
import * as loginActions from '../../reducers/login/actions';

class ServersScreen extends Component {
  componentWillMount() {
    const { dispatch, token } = this.props;

    if (token) {
      dispatch(serversActions.fetch());
    }
  }

  onLogout() {
    const { dispatch } = this.props;
    dispatch(loginActions.logout());
  }

  renderHeader() {
    return (
      <div>
        <img src={require('../../assets/img/logo.png')} alt={'tesonet logo'}/>
        <ImageIcon icon={'logout'} onClick={() => this.onLogout()}/>
      </div>
    );
  }

  renderLoading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
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
      <ul>
        { Rows }
      </ul>
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

  return {
    servers,
    isFetching,
    errorMessage,
    token
  };
}

export default withRouter(connect(mapStateToProps)(ServersScreen));
