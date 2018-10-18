import React from 'react'

const ServerListItem = ({addToFavorites, server}) => (
    <li onClick={() => addToFavorites({...server})} className="list_item">
        <div>{server.name}</div>
        <div>{server.distance}</div>
    </li>
)

export default ServerListItem