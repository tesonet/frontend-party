import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Page } from 'containers';
import { LoadingIndicator } from 'components/LoadingElements';
import { Table } from 'components/PageElements';

import { actions as serversActions } from 'store/servers';

const ServerList = ({ history }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.servers.isLoading);
  const error = useSelector(state => state.servers.error);
  const servers = useSelector(state => state.servers.servers);

  useEffect(() => {
    dispatch(serversActions.getServers());
  }, []);

  return (
    <Page withDashboard>
      {error ? (
        error
      ) : (
        <div>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <Table
              headerItems={[
                { name: 'SERVER', key: 'name' },
                { name: 'DISTANCE', key: 'distance' }
              ]}
              items={servers.map(item => ({ key: item.name, ...item }))}
            />
          )}
        </div>
      )}
    </Page>
  );
};

export default ServerList;
