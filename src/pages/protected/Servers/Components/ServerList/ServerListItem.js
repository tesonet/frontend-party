import React from 'react'

const ServerListItem = ({ addToFavourites, removeFromFavourites, server }) => (
  <li
    title="Select favorite server"
    onClick={() => server.favourite ? removeFromFavourites({ ...server }) : addToFavourites({ ...server })}
    className={`${server.favourite ? 'active ' : ''}list_item`}
  >
      <div>{server.name}</div>
      <div>{server.distance}</div>
  </li>
)

export default ServerListItem