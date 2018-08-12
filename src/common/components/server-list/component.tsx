import Server from 'common/components/server';
import Header from 'common/components/server-list/header';
import * as React from 'react';

interface IProps {
  ids: string[];
}

const ServerList: React.SFC<IProps> = ({ ids }) => (
  <>
    <Header />
    {ids.map(id => (
      <Server key={id} id={id} />
    ))}
  </>
);

export default ServerList;
