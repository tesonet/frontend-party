import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Page } from 'containers';
import { Table } from 'components/PageElements';

import { actions as serversActions } from 'store/servers';

import { sortServerList } from './Servers.utils';

const ServerList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.servers.isLoading);
  const error = useSelector(state => state.servers.error);
  const servers = useSelector(state => state.servers.servers);

  useEffect(() => {
    dispatch(serversActions.getServers());
  }, []);

  return (
    <Page withDashboard isLoading={isLoading}>
      {error ? (
        error
      ) : (
        <Table
          headerItems={[
            { name: 'SERVER', key: 'name' },
            { name: 'DISTANCE', key: 'distance' }
          ]}
          items={servers.map(item => ({
            key: `${item.name}-${item.distance}`,
            ...item
          }))}
          sortingFunction={sortServerList}
        />
      )}
    </Page>
  );
};

export default ServerList;
