import React from 'react';
import Branding from '../Branding';
import Button from '../Button';
import Table from '../Table';
import { RouteComponentProps } from 'react-router';

const ServerList: React.FC<RouteComponentProps> = props => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    props.history.replace('/');
  };

  const token = localStorage.getItem('token');
  if (!token) props.history.replace('/');

  return (
    <div>
      <div className={'flex justify-between items-center my-5 mx-4'}>
        <Branding textColor={'text-black'} />
        <Button
          text={'Logout'}
          onClick={handleLogout}
          classes={'text-black border-solid border-2 border-blue-700'}
        />
      </div>
      <Table />
    </div>
  );
};

export default ServerList;
