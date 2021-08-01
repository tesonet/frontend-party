import React, { useMemo } from 'react';

import {
  withErrorWrapper,
  Loader,
  withErrorWrapperPropTypes,
} from '@Common';

import { useFetchServers, useSortDirection } from './hooks';
import ServerList from './components/ServerList';
import { sortServersByDistance } from './utils';

const ServerListPage = ({ errorHandler }) => {
  const {
    serversLoaded,
    servers,
    setServers,
  } = useFetchServers(errorHandler);
  const { sortDirection, handleSortAction } = useSortDirection();

  useMemo(() => {
    if (![sortDirection, servers].includes(null)) {
      const sortedServers = sortServersByDistance(sortDirection, servers);

      setServers(sortedServers);
    }
  }, [servers, sortDirection]);

  return (
    <Loader loaded={serversLoaded}>
      {servers && (
        <ServerList
          servers={servers}
          sortDirection={sortDirection}
          handleSortAction={handleSortAction}
        />
      )}
    </Loader>
  );
};

ServerListPage.propTypes = {
  ...withErrorWrapperPropTypes,
};

export default withErrorWrapper(ServerListPage);
