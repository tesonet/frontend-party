import React from 'react'
import { useSelector } from 'react-redux'
import { sortByName, sortByDistance, removeSort } from 'actions/servers'
import { useActions } from 'hooks/useActions'
import { ServerItemWrapper, ServerListWrapper, Items, HeaderItem } from './ServerListContent.style'
import { Server } from 'types/server'
import { addKmToDistance } from 'libs/utils'
import Button from 'components/core/Button/Button'
import CloseIcon from 'components/Icons/CloseIcon'

const ServerItem: React.FC<Server> = ({ name, distance }) => {
  return (
    <ServerItemWrapper>
      <div>{name}</div>
      <div>{addKmToDistance(distance)}</div>
    </ServerItemWrapper>
  )
}

const ServerItemHeader: React.FC = () => {
  const actions = useActions({ sortByName, sortByDistance, removeSort })
  const sortedBy = useSelector(s => s.servers.sortBy)
  const sortedByName = sortedBy === 'name'
  const sortedByDistance = sortedBy === 'distance'

  const ClearSortButton = () => (
    <HeaderItem>
      <Button big onClick={actions.removeSort} title="Clear sorting" icon={<CloseIcon />} />
    </HeaderItem>
  )
  return (
    <ServerItemWrapper header>
      <HeaderItem onClick={actions.sortByName} active={sortedByName}>
        Server
      </HeaderItem>

      {(sortedByName || sortedByDistance) && <ClearSortButton />}
      <HeaderItem onClick={actions.sortByDistance} active={sortedByDistance}>
        Distance
      </HeaderItem>
    </ServerItemWrapper>
  )
}

interface ServerListProps {
  servers: Server[]
}

const ServerList: React.FC<ServerListProps> = ({ servers }) => {
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
