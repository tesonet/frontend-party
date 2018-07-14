import React from 'react';

const List = ({ data, columns }) => {
    return (
        <div>
            <div>
                {columns.map(column => (<div>{ column.header }</div>))}
            </div>
            {data.map(item => (
                <div>
                    {columns.map(column => (
                        <div>{ item[column.accessor] }</div>
                    ))}
                </div>
            ))}
        </div>
    )
};

export default List;