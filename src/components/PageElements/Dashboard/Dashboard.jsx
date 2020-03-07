import React from 'react';

import { Image } from 'components/PageElements';
import { Button } from 'components/FormElements';
import { BodyText } from 'components/Typography';
import * as Icons from 'components/Icons';
import logo from 'assets/logo.png';

import { DashboardWrapper } from './atoms';

const Dashboard = ({ onClickLogout }) => (
  <DashboardWrapper px={12} py={36}>
    <Image width={115} src={logo} />
    <Button variant='text' onClick={onClickLogout}>
      <Icons.Logout mr={12} />
      <BodyText display='inline-block'>Logout</BodyText>
    </Button>
  </DashboardWrapper>
);
export default Dashboard;
