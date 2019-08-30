import React from 'react';
import Branding from '../Branding';
import Button from '../Button';
import Table from '../Table';

const ServerList: React.FC = () => {
  return (
    <div>
      <div className={'flex justify-between'}>
        <Branding textColor={'text-black'} />
        <Button text={'Logout'} />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default ServerList;
