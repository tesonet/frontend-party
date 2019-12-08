import React, { useEffect } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { AppState } from '../../redux/store';
import { apiCall } from '../../helpers/apiCall';
import { Server } from '../../redux/containers/servers/serversReducer';
import { ServersActions } from '../../redux/containers/servers/serversActions';
import { AuthActions } from '../../redux/containers/auth/authActions';
import ServerList from './ServerList';

import './Servers.scss';

type StateProps = ReturnType<typeof mapStateToProps>;

const ServersComponent: React.SFC<StateProps & DispatchProp> = ({ servers, loading, error, dispatch }) => {
  const loadServers = async () => {
    try {
      dispatch(ServersActions.getServers());
      const res = await apiCall<Server[]>({ url: 'http://playground.tesonet.lt/v1/servers' }, dispatch);

      dispatch(ServersActions.getServersSuccess(res));
    } catch (ex) {
      dispatch(ServersActions.getServersError(ex));
    }
};

  useEffect(() => {
    if (servers.length === 0 && !loading && !error) {
      loadServers();
    }
  }, [servers, loading, error]);


  return (
    <div className="servers">
      <div className="servers__nav">
        <img src="/static/images/dark-logo.svg" />
        <button onClick={() => dispatch(AuthActions.logout())}>Logout</button>
      </div>

      <div className="servers__header">
        <div>SERVER</div>
        <div>DISTANCE</div>
      </div>

      <ServerList servers={servers} loading={loading} error={error} />
    </div>
  );
}

const sortServersByDistanceAndName = (a: Server, b: Server) => a.distance - b.distance || a.name.toLowerCase().localeCompare(b.name.toLowerCase());

const mapStateToProps = (state: AppState) => ({
  loading: state.servers.loading,
  error: state.servers.error,
  servers: state.servers.servers.sort(sortServersByDistanceAndName)
});

const Servers = connect(mapStateToProps)(ServersComponent);
export default Servers;