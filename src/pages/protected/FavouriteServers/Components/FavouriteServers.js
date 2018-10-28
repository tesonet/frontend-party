import React from 'react'

const FavouriteServers = ({ favourites }) =>
  <div className="inner-page favorite-server">
    <div className="list">
      <div className="list_header">
        <div>SERVER</div>
        <div>DISTANCE</div>
      </div>
      <ul className="list_items">
        {favourites.map((server, index) => (
          <li className="list_item" key={index}>
            <div>{server.name}</div>
            <div>{server.distance}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>

export default FavouriteServers