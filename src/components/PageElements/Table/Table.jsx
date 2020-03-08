import React, { useState, useEffect } from 'react';
import { arrayOf, func, object } from 'prop-types';
import styled from 'styled-components';

import { Header } from './Header';
import { Row } from './Row';

const TableWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

const propTypes = {
  headerItems: arrayOf(object),
  items: arrayOf(object),
  sortingFunction: func
};

const defaultProps = {
  headerItems: [],
  items: []
};

const Table = ({ headerItems, items, sortingFunction }) => {
  const [renderedItems, setRenderedItems] = useState(items);
  const [sortBy, setSortBy] = useState();

  useEffect(() => {
    setRenderedItems(items);
  }, [items]);

  useEffect(() => {
    if (sortBy && sortingFunction) {
      setRenderedItems(sortingFunction(sortBy, items));
    }
  }, [sortBy]);

  return (
    <TableWrapper>
      <Header
        items={headerItems}
        onSort={props => {
          setSortBy(props);
        }}
      />
      {renderedItems.map(item => (
        <Row key={item.key} {...item} />
      ))}
    </TableWrapper>
  );
};

Table.defaultProps = defaultProps;
Table.propTypes = propTypes;

export default Table;
