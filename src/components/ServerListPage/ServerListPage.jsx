import React from 'react';

import {
  withErrorWrapper,
  Loader,
  withErrorWrapperPropTypes,
} from '@Common';

import { useFetchServers, useSortServers } from './hooks';
import ServerList from './components/ServerList';
import { NO_SERVERS_MESSAGE } from './config/constants';

const ServerListPage = ({ errorHandler }) => {
  const {
    serversLoaded,
    servers,
    setServers,
  } = useFetchServers(errorHandler);
  const { sortConfig, handleSortAction } = useSortServers(servers, setServers);

  if (servers && servers.length === 0) {
    return NO_SERVERS_MESSAGE;
  }

  return (
    <Loader loaded={serversLoaded}>
      {servers && (
        <ServerList
          servers={servers}
          sortConfig={sortConfig}
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
