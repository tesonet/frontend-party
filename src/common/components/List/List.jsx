import React from 'react';
import './List.scss';

const List = ({ data, columns }) => {
    return (
        <div className="List">
            <div className="List-row List-row--header">
                {columns.map(column => (<div className="List-cell List-cell--header">{ column.header }</div>))}
            </div>
            <div className="List-content">
                {data.map(item => (
                    <div className="List-row">
                        {columns.map(column => {
                            const value = item[column.accessor];
                            const formattedValue = column.suffix ? `${value} ${column.suffix}` : value;
                            return  <div className="List-cell">{ formattedValue }</div>
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default List;