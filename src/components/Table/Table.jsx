
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import './Table.scss';

const Table = ({ servers }) => {
    const [tableRows, setTableRows] = useState([]);
    const [activeSort, setActiveSort] = useState({});

    const columns = [
        {
            header: 'SERVER',
            property: 'name'
        },
        {
            header: 'DISTANCE',
            property: 'distance'
        }
    ];

    const sort = (items, property, reverse) => {
        const sorted = items.sort((a, b) => {
            if (a[property] > b[property]) {
                return 1;
            }
            if (b[property] > a[property]) {
                return -1;
            }
            return 0;
        });

        return reverse ? sorted.reverse() : sorted;
    }

    const getTableRows = (items) => {
        const rows = items.map((item) => {
            return (
                <tr key={item.name + item.distance}>
                    <td>{item.name}</td>
                    <td className="text-right">{item.distance} km</td>
                </tr>
            );
        });

        return rows;
    }

    const handleSort = (property) => {
        const reverse = activeSort.property === property ? !activeSort.reverse : false;
        const sorted = sort(servers, property, reverse);
        const rows = getTableRows(sorted);

        setActiveSort({ property, reverse });
        setTableRows(rows);
    }

    useEffect(() => {
        handleSort(servers, 'name');
    }, [servers]);

    return (
        <table className="table">
            <thead>
                <tr>
                    {
                        columns.map((column) => {
                            return (
                                <th
                                    key={column.property}
                                    className={`table-header ${column.property === "distance" && "text-right"}`}
                                    onClick={() => handleSort(column.property)}>
                                    <span className="table-header-sort">
                                        {column.header}
                                        {column.property === activeSort.property &&
                                            <i className={activeSort.reverse ? "fas fa-caret-down" : "fas fa-caret-up"}></i>}
                                    </span>
                                </th>
                            );
                        })
                    }
                </tr>
            </thead>
            <tbody className="table-body">
                {tableRows}
            </tbody>
        </table>
    )
}

Table.defaultProps = {
    servers: [{ name: 'Default', distance: 0 }]
};

Table.propTypes = {
    servers: PropTypes.arrayOf(PropTypes.object)
}

export default Table;