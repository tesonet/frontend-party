import React, { useState, useEffect } from 'react';
import { arrayOf, func, object } from 'prop-types';

import { Box } from 'components/Core';

import { HeaderWrapper, HeaderLabel } from './atoms';

const propTypes = {
  onSort: func,
  items: arrayOf(object)
};

const defaultProps = {
  items: []
};

const Header = ({ onSort, items }) => {
  const [sortKey, setSortKey] = useState();
  const [sortDirection, setSortDirection] = useState();

  useEffect(() => {
    if (sortKey && onSort) {
      onSort({
        key: sortKey,
        isDescending: sortDirection
      });
    }
  }, [sortKey, sortDirection]);

  return (
    <HeaderWrapper p={20}>
      {items.map(item => (
        <Box
          display='flex'
          flexDirection='row'
          key={item.key}
          onClick={() => {
            if (!sortKey) {
              setSortKey(item.key);
              setSortDirection(true);
            } else if (sortKey === item.key) {
              setSortDirection(!sortDirection);
            } else {
              setSortKey(item.key);
              setSortDirection(true);
            }
          }}
        >
          <HeaderLabel
            item={item}
            isSortedBy={sortKey === item.key}
            isDescending={sortDirection}
          />
        </Box>
      ))}
    </HeaderWrapper>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
