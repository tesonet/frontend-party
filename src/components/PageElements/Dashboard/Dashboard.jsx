import React from 'react';

import { Button } from 'components/FormElements';

import { DashboardWrapper } from './atoms';

const Dashboard = ({ onClickLogout }) => {
  return (
    <DashboardWrapper>
      <div>logo</div>
      <div>
        <Button onClick={onClickLogout}>Logout</Button>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
