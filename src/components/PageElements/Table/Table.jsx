import React from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import { Row } from './Row';

const TableWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

const defaultProps = {
  items: []
};

const Table = ({ headerItems, items }) => {
  return (
    <TableWrapper>
      {Header && <Header items={headerItems} />}
      {items.map(item => (
        <Row key={item.key} {...item} />
      ))}
    </TableWrapper>
  );
};

Table.defaultProps = defaultProps;

export default Table;
