import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from '../../../auth';
import servers from '../../../servers';
import { ErrorMsg, Spinner, ServerList } from '../../components';

export class ServerPage extends Component {
  componentWillMount() {
    if (sessionStorage.getItem('token')) {
      this.props
        .onAPIRequest()
        .then(() => {})
        .catch(error => this.setState({ error: this.props.error }));
    } else this.props.history.replace('/');
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.isLogged) {
      if (!sessionStorage.getItem('token')) this.props.history.replace('/');
    }
  }

  render() {
    const { servers, isFetching, error } = this.props;

    return (
      <div>
        {error && <ErrorMsg error={error} />}

        <div style={centrifyingDiv}>
          {isFetching && <Spinner spinnerType="serverSpinner" />}
          {!isFetching && servers.length === 0 && (
            <h2>
              There was an issue when loading the servers. Please try logging
              out and back in.
            </h2>
          )}
          {!isFetching && servers.length > 0 && (
            <ServerList servers={servers} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: auth.selectors.isLogged(state),
  isFetching: servers.selectors.isFetching(state),
  servers: servers.selectors.getServers(state),
  error: servers.selectors.getError(state)
});

const mapActionsToProps = {
  onAPIRequest: servers.actions.getServers
};

const centrifyingDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ServerPage);
