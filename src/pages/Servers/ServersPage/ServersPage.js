import React from 'react';
import ServersHeader from '../ServersHeader/ServersHeader';
import ServersTable from '../ServersTable/ServersTable';
import { StyledServersPageContainer } from './ServersPage.styles';

const ServersPage = () => (
  <StyledServersPageContainer>
    <ServersHeader />
    <ServersTable />
  </StyledServersPageContainer>
);

export default ServersPage;
