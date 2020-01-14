import React from "react";
import styled from "styled-components";
import { Server } from "../../store/servers/actions";

interface TableHeaderProps {
  columns: string[];
}

interface TableProps {
  data: Server[];
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
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => (
  <TableHeaderContainer>
    {columns.map(column => (
      <Column key={column}>{column}</Column>
    ))}
  </TableHeaderContainer>
);

const TableBody = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  height: 100px;
`;

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <TableContainer>
      <TableHeader columns={["SERVER", "DISTANCE"]} />
      <TableBody>
        {data.map(row => (
          <Row key={row.name}>
            <Column>{row.name}</Column>
            <Column>{row.distance}</Column>
          </Row>
        ))}
      </TableBody>
    </TableContainer>
  );
};
