import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadServers } from '../../actions/servers'
import { useActions } from '../../hooks/useActions'
import { ServerItemWrapper, ServerListWrapper } from './ServerListContent.style'
import { Server } from 'types/server'

const ServerList: React.FC = () => {
  const actions = useActions({
    loadServers,
  })
  const servers = useSelector(s => s.servers.servers)
  // useSelector(sortServerList)

  useEffect(() => {
    actions.loadServers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ServerItem: React.FC<Server> = ({ name, distance }) => {
    return (
      <ServerItemWrapper>
        <div>{name}</div>
        <div>{distance}</div>
      </ServerItemWrapper>
    )
  }

  const ServerItemHeader: React.FC = () => {
    return (
      <ServerItemWrapper header>
        <div>Server</div>
        <div>Distance</div>
      </ServerItemWrapper>
    )
  }

  return (
    <ServerListWrapper>
      <ServerItemHeader />
      {servers.map((server, index) => (
        <ServerItem key={`${server.name}-${index}`} name={server.name} distance={server.distance}>
          <div>{server.name}</div>
          <div>{server.distance}</div>
        </ServerItem>
      ))}
    </ServerListWrapper>
  )
}
export default ServerList
