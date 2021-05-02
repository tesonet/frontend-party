import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadServers } from '../../actions/servers'
import { useActions } from '../../hooks/useActions'

const ServerList: React.FC = () => {
  const actions = useActions({
    loadServers,
  })
  const servers = useSelector(s => s.servers.servers)
  const loading = useSelector(s => s.servers.loading)
  useEffect(() => {
    actions.loadServers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {loading && <div>Loading</div>}
      {servers.map(server => (
        <div key={server.name}>
          <div>{server.name}</div>
          <div>{server.distance}</div>
        </div>
      ))}
    </div>
  )
}
export default ServerList
