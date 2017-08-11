import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as serversActions from '../../reducers/servers/actions';

class ServersScreen extends Component {
  componentWillMount() {
    const { dispatch, token } = this.props;

    if (token) {
      dispatch(serversActions.fetch());
    }
  }

  render() {
    const { servers, isFetching, errorMessage, token } = this.props;

    console.log('HERE', servers, isFetching, errorMessage, token );

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

export default connect(mapStateToProps)(ServersScreen);
