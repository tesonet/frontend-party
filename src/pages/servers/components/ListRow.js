import React from 'react'

export const ListRow = ({ rowEntry, distanceSuffix }) => {
    return (
        <div className="servers-list-row">
        	<div>{rowEntry.name}  </div>
        	<div className="distance">{rowEntry.distance} {distanceSuffix}</div>
        </div>
    )
}