import * as React from 'react';

import { MainLayout } from '@layouts/MainLayout';
import { ServerListContainer } from '@containers/ServerList/ServerList';

const HomePage = () => (
  <MainLayout>
    <ServerListContainer />
  </MainLayout>
);

export default HomePage;
