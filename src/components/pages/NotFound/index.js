import React from 'react'
import styled from 'styled-components'
import PageTemplate from '../../templates/Page'
import DashboardBar from '../../common/DashboardBar'
import Footer from '../../common/Footer'
import NotFoundImage from '../../../assets/404.gif'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ErrorCode = styled.h1`
  color: red;
  text-shadow: black 1px 2px;
  font-size: 70px;
  text-align: center;
`

const NotFound = () => {
  return (
    <PageTemplate header={<DashboardBar />} footer={<Footer />}>
      <Content>
        <ErrorCode>404</ErrorCode>
        <img
          src={NotFoundImage}
          alt="Now you're lost, Lost in the heat of it all"
        />
      </Content>
    </PageTemplate>
  )
}

export default NotFound
