import React from 'react'
import BaseContainer from './BaseContainer'
import ServerListContent from '../components/ServerListContent/ServerListContent'
import { useSelector } from 'react-redux'
import Header from 'components/Header/Header'

const ServerListContainer: React.FC = () => {
  const loading = useSelector(s => s.servers.loading)
  return <BaseContainer content={<ServerListContent />} header={<Header />} loading={loading} />
}
export default ServerListContainer
