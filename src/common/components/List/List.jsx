import React from 'react';
import shortid from 'shortid';
import './List.scss';

const List = ({ data, columns }) => {
    return (
        <div className="List">
            <div className="List-row List-row--header">
                {columns.map(column => (<div key={shortid.generate()} className="List-cell List-cell--header">{ column.header }</div>))}
            </div>
            <div className="List-content">
                {data.map(item => (
                    <div key={shortid.generate()} className="List-row">
                        {columns.map(column => {
                            const value = item[column.accessor];
                            const formattedValue = column.suffix ? `${value} ${column.suffix}` : value;
                            return  <div key={shortid.generate()} className="List-cell">{ formattedValue }</div>
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default List;