import React from 'react'

export const ListHeader = ({ tableColumns, handleSorting }) => {
    return (
    	<div>
		    {tableColumns.map((item, index) => (<div key={index} onClick={() => handleSorting(item.sortBy, item.sortingType)}>{item.title}</div>))}
    	</div>
    )
}