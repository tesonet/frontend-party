import React from 'react';

import {
  withErrorWrapper,
  Loader,
  withErrorWrapperPropTypes,
} from '@Common';

import { useFetchServers, useSortServers } from './hooks';
import ServerList from './components/ServerList';

const ServerListPage = ({ errorHandler }) => {
  const {
    serversLoaded,
    servers,
    setServers,
  } = useFetchServers(errorHandler);
  const { sortConfig, handleSortAction } = useSortServers(servers, setServers);

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
