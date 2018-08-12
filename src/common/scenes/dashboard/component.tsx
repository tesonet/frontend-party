import Header from 'common/components/header/component';
import ServerList from 'common/components/server-list';
import * as React from 'react';

const Home: React.SFC = () => (
  <div>
    <Header />
    <ServerList />
  </div>
);

export default Home;
