import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as R from 'ramda';

import { actions } from '@redux/ducks/servers';
import { ServerListHeader } from '@components/ServerListHeader/ServerListHeader';
import { ServerItem } from '@components/ServerItem/ServerItem';
import { State } from '@redux/reducer';
import { Server } from '@typings/servers';
import { Loader } from '@components/Loader/Loader';

export const ServerListContainer = () => {
  const dispatch = useDispatch();
  const { servers, isLoading } = useSelector((state: State) => state.servers);

  const [serversToRender, setServersToRender] = React.useState<Server[]>(servers);
  const [sortedBy, setSortedBy] = React.useState<'name' | 'distance' | undefined>();

  React.useEffect(() => {
    if (servers.length > 0) {
      setServersToRender(servers);
    } else {
      dispatch(actions.fetchServers());
    }
  }, [servers]);

  const handleSortBy = (prop: 'name' | 'distance') => {
    let listSorted: Server[];
    if (sortedBy === prop) {
      listSorted = R.reverse(serversToRender);
    } else {
      listSorted = R.sortBy(R.prop(prop))(serversToRender);
    }
    setSortedBy(prop);
    setServersToRender(listSorted);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ServerListHeader onSortClick={handleSortBy} />
      {serversToRender.map(server => (
        <ServerItem key={`${server.name}${server.distance}`} data={server} />
      ))}
    </>
  );
};
