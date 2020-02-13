import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../rootReducer';
import { Server } from '../tesonetAPI';
import { AppDispatch } from '../store';
import { fetchServers } from '../slices/servers.slice';
import { orderBy } from 'lodash-es';
import Table, { SortDirection, SortInfo } from './Table';
import LoadingPlaceholder from './LoadingPlaceholder';
import AppHeader from './AppHeader';

const SERVERS_COLUMNS = [
  {
    header: 'Server',
    accessor: 'name' as const,
  },
  {
    header: 'Distance',
    accessor: 'distance' as const,
    className: 'text-right',
    cell: ({ cellValue }: { cellValue: number }) => {
      return `${cellValue} km`;
    },
  },
];

const ServersPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading } = useSelector((state: RootState) => state.servers);
  const { accessToken } = useSelector((state: RootState) => state.auth);

  const [sortInfo, setSortInfo] = useState<SortInfo<Server>>({
    column: 'distance',
    direction: SortDirection.DESC,
  });

  useEffect(() => {
    dispatch(fetchServers(accessToken));
  }, [accessToken, dispatch]);

  const sortedServers = useMemo(() => {
    return orderBy(items, sortInfo.column, sortInfo.direction);
  }, [items, sortInfo.column, sortInfo.direction]);

  return (
    <div className="ServersPage">
      <AppHeader />
      {loading ? (
        <LoadingPlaceholder>Loading...</LoadingPlaceholder>
      ) : (
        <Table
          data={sortedServers}
          idProperty="id"
          columns={SERVERS_COLUMNS}
          sortInfo={sortInfo}
          onSortChange={setSortInfo}
        />
      )}
    </div>
  );
};

export default ServersPage;
