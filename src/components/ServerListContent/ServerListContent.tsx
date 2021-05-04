import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadServers } from '../../actions/servers'
import { useActions } from '../../hooks/useActions'
import { ServerItemWrapper, ServerListWrapper, Items } from './ServerListContent.style'
import { Server } from 'types/server'
import { addKmToDistance } from '../../libs/utils'

const ServerItem: React.FC<Server> = ({ name, distance }) => {
  return (
    <ServerItemWrapper>
      <div>{name}</div>
      <div>{addKmToDistance(distance)}</div>
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

  return (
    <ServerListWrapper>
      <ServerItemHeader />
      <Items>
        {servers.map((server, index) => (
          <ServerItem
            key={`${server.name}-${index}`}
            name={server.name}
            distance={server.distance}
          />
        ))}
      </Items>
    </ServerListWrapper>
  )
}
export default ServerList
