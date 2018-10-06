import React from 'react'

export const ListRow = ({ rowEntry, distanceSuffix }) => {
    return (
        <div className="servers-list-row">
        	<div>{rowEntry.name}  </div>
        	<div>{rowEntry.distance} {distanceSuffix}</div>
        </div>
    )
}