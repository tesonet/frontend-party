import React, { useEffect } from 'react'
import BaseContainer from './BaseContainer'
import ServerList from 'components/ServerList/ServerList'
import { loadServers } from 'actions/servers'
import { useSelector } from 'react-redux'
import Header from 'components/Header/Header'
import { useActions } from 'hooks/useActions'
import { serverSortSelector } from 'selectors/server'
import { logoutUser } from '../actions/auth'
import { useHistory } from 'react-router'

const ServerListContainer: React.FC = () => {
  const loading = useSelector(s => s.servers.loading)
  const servers = useSelector(serverSortSelector)
  const actions = useActions({
    loadServers,
    logoutUser,
  })
  const history = useHistory()
  const handleLogout = () => {
    actions.logoutUser()
    history.push('/')
  }

  useEffect(() => {
    actions.loadServers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const content = <ServerList servers={servers} />

  return (
    <BaseContainer
      content={content}
      header={<Header fixed handleLogout={handleLogout} />}
      loading={loading}
    />
  )
}
export default ServerListContainer
