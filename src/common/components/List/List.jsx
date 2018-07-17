import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './List.scss';

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    columns: PropTypes.arrayOf(PropTypes.shape({
        accessor: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
        suffix: PropTypes.string,
    }))
};

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

List.propTypes = propTypes;

export default List;