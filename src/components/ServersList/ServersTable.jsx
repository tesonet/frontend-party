import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useTable, useSortBy } from 'react-table';

const ServersTable = ({ data, columns, ...initialState }) => {
    const {
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            ...initialState,
        },
        useSortBy,
    );

    return (
        <table className="servers-table">
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr key={headerGroup.getHeaderGroupProps().key}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps([
                                    { className: column.className },
                                ])}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr key={row.id}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps([
                                    { className: cell.column.className },
                                ])}
                                >
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

ServersTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        distance: PropTypes.number,
    })).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        accessor: PropTypes.string,
        Header: PropTypes.string,
    })).isRequired,
};

export default memo(ServersTable);
