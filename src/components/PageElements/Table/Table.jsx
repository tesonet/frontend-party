import React, { useState, useEffect } from 'react';
import { arrayOf, func, object } from 'prop-types';

import { Box } from 'components/Core';

import { Header } from './Header';
import { Row } from './Row';

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
    <Box>
      <Header
        items={headerItems}
        onSort={props => {
          setSortBy(props);
        }}
      />
      {renderedItems.map(item => (
        <Row key={item.key} {...item} />
      ))}
    </Box>
  );
};

Table.defaultProps = defaultProps;
Table.propTypes = propTypes;

export default Table;
