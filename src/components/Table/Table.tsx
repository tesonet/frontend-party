import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Server } from "../../store/servers/actions";

interface TableHeaderColumn {
  key: string;
  display: string;
}

interface TableHeaderProps {
  columns: TableHeaderColumn[];
  onHeaderClick: Function;
}

interface TableProps {
  data: Server[];
  columns: TableHeaderColumn[];
}

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  color: #999999;
`;

const TableHeaderContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div`
  padding: 1rem;
  cursor: default;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
`;

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  onHeaderClick
}) => (
  <TableHeaderContainer>
    {columns.map(column => (
      <Column key={column.key} onClick={() => onHeaderClick(column.key)}>
        {column.display}
      </Column>
    ))}
  </TableHeaderContainer>
);

const TableBody = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  height: 100px;
`;

enum SortDirections {
  "NONE" = null,
  "ASC" = 1,
  "DESC" = -1
}
type SortKeys = null | "name" | "distance";

export const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [sortedData, setSortedData] = useState<Server[]>([]);
  const [sortKey, setSortKey] = useState<SortKeys>(null);
  const [sortDirection, setSortDirection] = useState<SortDirections>(null);

  useEffect(() => {
    const sort = (): Server[] => {
      if (sortDirection !== null && sortKey !== null) {
        return JSON.parse(JSON.stringify(data)).sort((a: Server, b: Server) => {
          if (a[sortKey] < b[sortKey]) {
            return -1 * sortDirection;
          }
          if (a[sortKey] > b[sortKey]) {
            return 1 * sortDirection;
          }
          return 0;
        });
      } else {
        return data;
      }
    };
    setSortedData(sort());
  }, [data, sortKey, sortDirection]);

  const handleHeaderClick = (sortKey: SortKeys): void => {
    setSortKey(sortKey);
    setSortDirection((direction: SortDirections) =>
      direction !== null ? direction * -1 : SortDirections.ASC
    );
  };

  return (
    <TableContainer>
      <TableHeader columns={columns} onHeaderClick={handleHeaderClick} />
      <TableBody>
        {sortedData.map(row => (
          <Row key={`${row.name}-${row.distance}`}>
            <Column>{row.name}</Column>
            <Column>{row.distance}</Column>
          </Row>
        ))}
      </TableBody>
    </TableContainer>
  );
};
