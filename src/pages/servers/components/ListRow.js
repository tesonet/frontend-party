import React from 'react'

export const ListRow = ({ rowEntry }) => {
    return (
        <div>
        	<div>{rowEntry.name}  </div>
        	<div>{rowEntry.distance}</div>
        </div>
    )
}