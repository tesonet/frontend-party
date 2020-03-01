import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServers } from '../../store/thunk/servers';

const Home = () => {
  const dispatch = useDispatch();
  const servers = useSelector(state => state.servers.servers);

  useEffect(() => {
    dispatch(fetchServers());
  }, [dispatch]);

  return servers.map(server => (
    <div key={`${server.name}${server.distance}`}>
      {server.name} {server.distance}
    </div>
  ));
};

export default Home;
