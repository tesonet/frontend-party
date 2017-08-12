import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as serversActions from '../../reducers/servers/actions';

class ServersScreen extends Component {
  componentWillMount() {
    const { dispatch, token } = this.props;

    if (token) {
      dispatch(serversActions.fetch());
    }
  }

  render() {
    return (
      <div className={'home-screen'}>
        <p>
          Here will be ServersScreen
        </p>
      </div>
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
