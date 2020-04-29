import React from 'react';
import { func } from 'prop-types';

import { Box } from 'components/Core';
import { Image } from 'components/PageElements';
import { Button } from 'components/FormElements';
import { BodyText } from 'components/Typography';
import * as Icons from 'components/Icons';
import logo from 'assets/logo.png';

const propTypes = {
  onClickLogout: func
};

const Dashboard = ({ onClickLogout }) => (
  <Box
    px={20}
    py={40}
    display='flex'
    alignItems='center'
    justifyContent='space-between'
  >
    <Image width={115} src={logo} />
    {onClickLogout && (
      <Button variant='text' onClick={onClickLogout}>
        <Icons.Logout mr={10} />
        <BodyText display='inline-block'>Logout</BodyText>
      </Button>
    )}
  </Box>
);

Dashboard.propTypes = propTypes;

export default Dashboard;
