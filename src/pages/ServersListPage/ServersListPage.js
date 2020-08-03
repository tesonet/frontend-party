import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServers } from '../../store/servers/servers.actions';
import { logout } from '../../store/login/login.actions';
import Header from '../../components/Header';
import Table from '../../components/UI/Table';

const columns = ['Servers', 'Distance'];

const ServersListPage = () => {
  const dispatch = useDispatch();
  const [orderedServers, setOrderedServers] = useState([]);
  const { loading, isError, serversList } = useSelector(({ servers }) => servers);

  useEffect(() => {
    dispatch(fetchServers());
  }, []);

  useEffect(() => {
    if (serversList !== 0) {
      const sortedServers = serversList.sort(
        (a, b) => a.distance - b.distance || a.name.localeCompare(b.name),
      );
      setOrderedServers(sortedServers);
    }
  }, [serversList]);

  const onLogoutClickHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Header onButtonClick={onLogoutClickHandler} />
      {loading ? <h3 style={{ textAlign: 'center' }}>Servers are loading... Please wait</h3> : <Table data={orderedServers} columns={columns} />}
      {isError && <h3 style={{ textAlign: 'center' }}>Error loading servers. Please contact system administrator.</h3>}
    </div>
  );
};

export default ServersListPage;
