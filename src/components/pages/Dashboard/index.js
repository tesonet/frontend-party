import React from 'react'
import DashboardBar from '../../common/DashboardBar'
import ServerList from '../../common/ServerList'
import Footer from '../../common/Footer'
import PageTemplate from '../../templates/Page'

export default () => (
  <PageTemplate header={<DashboardBar />} footer={<Footer />}>
    <ServerList />
  </PageTemplate>
)
