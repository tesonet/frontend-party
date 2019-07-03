import React from 'react';
import Header from '../main/Header';
import Panel from '../main/Panel';
import List from '../main/List';
import './Servers.scss';

const Servers = () => {
  return (
    <div className="Servers view">
      <div className="headers">
        <Header />
        <Panel />
      </div>
      <List />
    </div>
  )
}

export default Servers;