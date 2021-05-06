import React, { useEffect } from 'react'
import BaseContainer from './BaseContainer'
import ServerListContent from '../components/ServerListContent/ServerListContent'
import { loadServers } from '../actions/servers'
import { useSelector } from 'react-redux'
import Header from 'components/Header/Header'
import { useActions } from '../hooks/useActions'
import { serverSortSelector } from '../selectors/server'

const ServerListContainer: React.FC = () => {
  const loading = useSelector(s => s.servers.loading)
  const actions = useActions({
    loadServers,
  })

  const servers = useSelector(serverSortSelector)

  useEffect(() => {
    actions.loadServers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const content = <ServerListContent servers={servers} />

  return <BaseContainer content={content} header={<Header fixed />} loading={loading} />
}
export default ServerListContainer
