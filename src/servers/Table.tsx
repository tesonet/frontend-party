import React from 'react';
import './Table.scss';

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export type SortInfo<T> = {
  column: keyof T;
  direction: SortDirection;
};

export type Column<T> = {
  header: string;
  className?: string;
  accessor: keyof T;
  cell?: ({ cellValue }: { cellValue: any }) => React.ReactNode;
};

type Props<T> = {
  data: T[];
  idProperty: keyof T;
  columns: Column<T>[];
  sortInfo: SortInfo<T>;
  onSortChange: (value: SortInfo<T>) => void;
};

const Table = <T extends {}>({ data, idProperty, columns, sortInfo, onSortChange }: Props<T>) => {
  return (
    <table className="Table">
      <thead>
        <tr>
          {columns.map(column => {
            return (
              <th
                key={String(column.accessor)}
                className={column.className}
                onClick={() => {
                  const key = column.accessor;
                  if (sortInfo.column === key) {
                    onSortChange({
                      column: key,
                      direction: sortInfo.direction === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC,
                    });
                  } else {
                    onSortChange({ column: key, direction: SortDirection.ASC });
                  }
                }}
              >
                {column.header}
                {sortInfo.column === column.accessor && (
                  <span className="ml-2">{sortInfo.direction === SortDirection.DESC ? '🔽' : '🔼'}</span>
                )}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <tr key={String(item[idProperty])}>
              {columns.map(column => {
                const cellValue = item[column.accessor];
                return (
                  <td key={String(column.accessor)} className={column.className}>
                    {column.cell ? column.cell({ cellValue }) : cellValue}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
